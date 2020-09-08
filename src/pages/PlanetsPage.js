import React, { useState, useEffect } from 'react';
import './../App.css';
import PlanetsItem from './../elements/PlanetsItems';

const PlanetsPage = () => {

    const [data, setData] = useState([]);
    const [btn, setBtn] = useState(false);

    useEffect(() => {

        fetch(`https://swapi.dev/api/planets/`)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err))

    }, [btn])

    let planetsElements = data
        .map(planet => <PlanetsItem key={planet.name} name={planet.name} />)

    return (
        <div className="content-wrap planets">
            <div className="text-wrap">
                <button className="planets-btn" onClick={() => setBtn(!btn)}>
                    See the planets
                </button>

                {planetsElements}

            </div>
        </div>
    )
}

export default PlanetsPage;