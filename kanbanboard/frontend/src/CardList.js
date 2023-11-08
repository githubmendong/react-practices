import React from 'react';
import styles from './assets/css/CardList.css';
import Card from './Card';

const CardList = ({ title, cards, moveCard }) => {
    const handleCardClick = (card) => {
        moveCard(card);
    };

    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map((card, index) => ( // Fix the map function here
                <Card
                    key={card.no}
                    no={card.no}
                    title={card.title}
                    description={card.description}
                    tasks={card.tasks}
                    index={index}
                    onCardClick={() => handleCardClick(card)}
                />
            ))}
        </div>
    );
};

export default CardList;
