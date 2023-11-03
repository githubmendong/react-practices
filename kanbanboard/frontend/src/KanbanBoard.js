import React from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';
import cards from './assets/json/data';

const KanbanBoard = () => {

    let ToDo = cards.filter(card => card.status === `ToDo`);
    let Doing = cards.filter(card => card.status === `Doing`);
    let Done = cards.filter(card => card.status === `Done`);
    return (
        <div className={styles.KanbanBoard}>
            <CardList
                key={'To Do'}
                title={'To Do'}
                cards={ToDo}/>
            <CardList
                key={'Doing'}
                title={'Doing'}
                cards={Doing}/>
            <CardList
                key={'Done'}
                title={'Done'}
                cards={Done}/>
        </div>
    );
};

export default KanbanBoard;