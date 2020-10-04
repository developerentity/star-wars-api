import React, { useState, useEffect } from 'react';
import './../App.css';

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
// return (
//     <div>
//         <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
// );
//     }
// }

// export default Clock;

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(() => {
        let timerId = setInterval(
            () => tick(),
            1000
        )
        return () => {
            clearInterval(timerId)
        }
    }, [time])

    const tick = () => {
        setTime(new Date().toLocaleTimeString())
    }

    return (
        <div>
            <h2>{time}</h2>
        </div>
    );
}

export default Clock;