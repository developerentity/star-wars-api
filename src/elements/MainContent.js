import React, { useState, useEffect } from 'react';
import './../App.css';

const api = 'https://swapi.dev/api/'

const MainContent = (props) => {

    const { shipNumber } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${api}starships/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
    }, [shipNumber])

    if (data?.name) {
        return (
            <div>
                Name: {data?.name}<br />
                Model: {data?.model}<br />
                Manufacturer: {data?.manufacturer}<br />
                Starship class: {data?.starship_class}<br />
            </div>
        )
    } else {
        return (
            <div className="noStarShip">
                <div className="noStarShipIn"><h1>Starship not found</h1></div>
            </div>
        )
    }
}

export default MainContent;