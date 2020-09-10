import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }  
}

function tick() {
        ReactDOM.render(
            <Clock />,
            document.getElementById('root')
        );
    }
setInterval(tick, 1000);

export default Clock;