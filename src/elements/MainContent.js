import React, { useState, useEffect } from 'react';
import './../App.css';

const api = 'https://swapi.dev/api/'

const MainContent = (props) => {

    const { shipNumber, shipApi } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!shipApi) {
            fetch(`${api}starships/${shipNumber}/`)
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => console.error(err))
        }
        if (shipApi) {
            fetch(shipApi)
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => console.error(err))
        }
    }, [shipNumber, shipApi])

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
                <div className="noStarShipIn">Starship not found</div>
            </div>
        )
    }
}

export default MainContent;