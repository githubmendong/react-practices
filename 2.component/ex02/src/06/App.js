import React from 'react';
import styles from './assets/scss/App.scss';

const StyledH1 =  styles.h1`

`;
function App() {
    return (
        <div id={'App'}>
            <Header/>
        </div>
    );
}

export {App};