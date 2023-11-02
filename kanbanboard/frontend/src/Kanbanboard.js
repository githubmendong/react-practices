import React from 'react';
import data from './assets/json/data';

function Kanbanboard(props) {
    const cardsToDo = data.filter(card => card.status === 'ToDo');
    const cardsDoing = data.filter(card => card.status === 'Doing');
    const cardsDone = data.filter(card => card.status === 'Done');

    return (
        <div>
            <h1>Kanbanboard</h1>
            <div>
                <h2>To Do</h2>
                {cardsToDo.map((card, index) => (
                    <div key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <h2>Doing</h2>
                {cardsDoing.map((card, index) => (
                    <div key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <h2>Done</h2>
                {cardsDone.map((card, index) => (
                    <div key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Kanbanboard;
