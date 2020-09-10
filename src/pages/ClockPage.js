import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';

function tick() {
    const element = (
        <div>
            <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

export default tick;