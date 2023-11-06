import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description, tasks}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
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
                            cardno={no}
                            tasks={tasks}
                        />
                    </div> :
                    null
            }

        </div>
    );
};

export default Card;