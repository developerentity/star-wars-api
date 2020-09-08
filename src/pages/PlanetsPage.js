import React, { useState, useEffect } from 'react';
import './../App.css';
import PlanetsItem from './../elements/PlanetsItems';

const PlanetsPage = () => {

    const [data, setData] = useState([]);
    const [api, setApi] = useState(`https://swapi.dev/api/planets/`)
   
    const apiFunc = (btnNum) => setApi(`https://swapi.dev/api/planets/?page=${btnNum}`)

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err))
    }, [api])

    let planetsElements = data
        .map(planet => <PlanetsItem key={planet.name} name={planet.name} rotation_period={planet.rotation_period} orbital_period={planet.orbital_period}/>)

    // let newPlanetsArr = []

    // for (let i = 0; i < planetsElements.length; i++) {
    //     if (i % 2) {
    //         newPlanetsArr.push(planetsElements[i]) 
    //     }
    // }

    let newPlanetsArr = planetsElements.filter((item, index) => index % 2 )

    return (
        <div className="content-wrap planets">
            <div className="text-wrap">
                <ul>
                    {newPlanetsArr}
                </ul>
                <button onClick={() => apiFunc(1)}>
                    1
                </button>
                <button onClick={() => apiFunc(2)}>
                    2
                </button>
                <button onClick={() => apiFunc(3)}>
                    3
                </button>
                <button onClick={() => apiFunc(4)}>
                    4
                </button>
                <button onClick={() => apiFunc(5)}>
                    5
                </button>
                <button onClick={() => apiFunc(6)}>
                    6
                </button>
            </div>
        </div>
    )
}

export default PlanetsPage;