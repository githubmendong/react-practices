import React, {useState} from 'react';
import KanbanBoard from './KanbanBoard';
import './assets/css/App.css';
import data from '../src/assets/json/data.js';

const App = () => {



    return (
        <div id="App">
            <KanbanBoard data={data}  />
        </div>
    );

};

export default App;
