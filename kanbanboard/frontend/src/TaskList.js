import React, { useState } from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

const TaskList = ({ cardNo, tasks, callbackAddTask, callbackChangeTaskDone }) => {
    const [newTaskName, setNewTaskName] = useState('');

    const handleAddTask = () => {
        if (newTaskName) {
            callbackAddTask(cardNo, newTaskName); // Call the callback to add the task
            setNewTaskName('');
        }
    };

    return (
        <div className="TaskList">
            <ul>
                {tasks.map(task => (
                    <Task
                        key={task.no}
                        no={task.no}
                        name={task.name}
                        done={task.done}
                        callback={callbackChangeTaskDone}
                    />
                ))}
            </ul>
            <input
                type="text"
                className={styles.TaskList__add_task}
                placeholder="태스크 추가"
                value={newTaskName}
                onChange={e => setNewTaskName(e.target.value)}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        handleAddTask();
                    }
                }}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskList;
