import React, { useState, useEffect } from 'react';
import './../App.css';
import StarshipItem from './StarshipItem'

const api = 'https://swapi.dev/api/'

const MainContent = (props) => {

    const { data } = props;
    const [starship, setStarship] = useState({})

    useEffect(() => {
        if (typeof data === "number") {
            fetch(`${api}starships/${data}/`)
                .then(res => res.json())
                .then(res => setStarship(res))
                .catch(err => console.error(err))
        } else if (typeof data === "string") {
            fetch(data)
                .then(res => res.json())
                .then(res => setStarship(res))
                .catch(err => console.error(err))
        }
    }, [data])

    return (
        <StarshipItem
            data={starship}
        />
    )
}

export default MainContent;