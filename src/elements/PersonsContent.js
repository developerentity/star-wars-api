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
    
    let starshipElements = data?.starships
        .map(starship => <MainContent shipApi={starship}/>)

    if (data?.name) {
        return (
            <div className="text-wrap">
                Person name: {data?.name}<br />
                Gender: {data?.gender}<br />
                Height: {data?.height}<br />
                Birth date: {data?.birth_year}<br />
                <br />
                <div className="personShip">
                    Starships:
                    {starshipElements}
                </div>
            </div>
        )
    } else {
        return (
            <div className="noStarShip text-wrap">
                <div>Person not found</div>
            </div>
        )
    }
}

export default PersonsContent;
