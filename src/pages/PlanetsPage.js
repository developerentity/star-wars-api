import React, { useState, useEffect } from 'react';
import './../App.css';
import PlanetsItem from './../elements/PlanetsItems';

const PlanetsPage = () => {

    const [data, setData] = useState({});
    const [btn, setBtn] = useState(false);

    useEffect(() => {

        fetch(`https://swapi.dev/api/planets/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))

    }, [btn])


    console.log(data.results)

    // let planetsArr = [...data.results]

    let pseudoPlanetsArr = [
        {key: 1, name: "Tatooine"}, 
        {key: 2, name: "Alderaan"}, 
        {key: 3, name: "Yavin IV" }, 
        {key: 4, name: "Hoth"}]

    let planetsElements = pseudoPlanetsArr
        .map(planet => <PlanetsItem key={planet.key} name={planet.name} />)

    return (
        <div>
            <button onClick={() => setBtn(!btn)}>
                See the planets
            </button>

            {planetsElements}

        </div>
    )
}

export default PlanetsPage;