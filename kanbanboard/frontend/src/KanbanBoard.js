import React, { useEffect } from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';
import data from './assets/json/data.js'; // 데이터 가져오기

const KanbanBoard = () => {
    const ToDo = data.filter((card) => card.status === 'ToDo');
    const Doing = data.filter((card) => card.status === 'Doing');
    const Done = data.filter((card) => card.status === 'Done');

    useEffect(() => {
        // 필요한 경우 데이터를 가져오는 로직을 추가할 수 있습니다.
    }, []);

    return (
        <div className={styles.KanbanBoard}>
            <CardList key={'To Do'} title={'To Do'} cards={ToDo} />
            <CardList key={'Doing'} title={'Doing'} cards={Doing} />
            <CardList key={'Done'} title={'Done'} cards={Done} />
        </div>
    );
};

export default KanbanBoard;
