import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({ no, title, description, index }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    const styleSideColor = {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        width: 3,
        backgroundColor: status === 'Doing' ? '#bd8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    };

    const changeTaskDone = async (taskNo, done) => {
        try {
            const response = await fetch(`/api/task/${taskNo}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ done }),
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            const updatedTasks = tasks.map(task => {
                if (task.no === taskNo) {
                    return { ...task, done: done };
                }
                return task;
            });

            setTasks(updatedTasks);
        } catch (err) {
            console.error(err);
        }
    };

    const addTask = async (taskName) => {
        try {
            const newTask = {
                name: taskName,
                done: 'N',
                cardNo: no,
            };

            const response = await fetch(`/api/task`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setTasks([json.data, ...tasks]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // <Draggable draggableId={`card-${no}`} index={index}>
        //     {(provided) => (
        //         <div
        //             ref={provided.innerRef}
        //             {...provided.draggableProps}
        //             {...provided.dragHandleProps}
        //             className={styles.Card}
        //         >
        <div className={styles.Card}>

            <div className={showDetails ?
                [styles.Card__Title, styles.Card__Title__Open].join(' ') :
                styles.Card__Title}
                 onClick={async () => {
                     setShowDetails(!showDetails);
                     console.log("나는 버튼입니다.");
                     if (showDetails) {
                         setShowDetails(false);
                         return;
                     }

                     try {
                         const response = await fetch(`/api/task?cardNo=${no}`, {
                             method: 'get',
                             headers: {
                                 'Accept': 'application/json'
                             }
                         });

                         if (!response.ok) {
                             throw new Error(`${response.status} ${response.statusText}`);
                         }
                         const json = await response.json();
                         if (json.result !== 'success') {
                             throw new Error(`${json.result} ${json.message}`);
                         }
                         setTasks(json.data);
                     } catch (err) {
                         console.log(err.message);
                     }
                 }}
            >
                {title}
            </div>
            {
                showDetails ?
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList
                            cardNo={no}
                            tasks={tasks}
                            callbackAddTask={addTask}
                            callbackChangeTaskDone={changeTaskDone}/>
                    </div> :
                    null
            }

        </div>
        // {/*        </div>*/}
          // {/*    )}*/}
        // {/*</Draggable>*/}
    );
};


export default Card;