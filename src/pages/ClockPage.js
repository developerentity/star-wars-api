import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h2>Сейчас {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }  
}

function tick() {
        ReactDOM.render(
            <Clock date={new Date()} />,
            document.getElementById('root')
        );
    }
setInterval(tick, 1000);

export default Clock;