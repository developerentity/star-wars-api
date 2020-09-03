import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import './../App.css';

const api = 'https://swapi.dev/api/'

const PersonsContent = (props) => {

    const { personId } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${api}people/${personId}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
    }, [personId])

    if (data?.name) {
        return (
            <div>
                Person name: {data?.name}<br />
                Gender: {data?.gender}<br />
                Height: {data?.height}<br />
                Birth date: {data?.birth_year}<br />
                <br />
                <div className="personShip">
                    <MainContent
                        shipApi={data?.starships[0]}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className="noStarShip">
                <div className="noStarShipIn"><h1>Person not found</h1></div>
            </div>
        )
    }
}

export default PersonsContent;
