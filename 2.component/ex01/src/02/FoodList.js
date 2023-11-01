import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {

    return (
        <ul>
            {
                foods.map(function (food,index) {
                    return <FoodListItem
                        key={food.no}
                        name={food.name}
                        count={food.count}/>;
                })
            }
        </ul>
    );
}

export default FoodList;