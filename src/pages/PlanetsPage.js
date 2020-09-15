import React, { useState, useEffect } from 'react';
import './../App.css';
import PlanetsItem from './../elements/PlanetsItems';
import ReactPaginate from 'react-paginate'

const PlanetsPage = () => {

    const [data, setData] = useState([]);
    const [api, setApi] = useState(`https://swapi.dev/api/planets/`)
    const [page, setPage] = useState(1)

    let crutch = (d) => setPage(d.selected + 1);

    // для пагинации без библиотеки
    // const apiFunc = (btnNum) => setApi(`https://swapi.dev/api/planets/?page=${btnNum}`)

    useEffect(() => {
        fetch(`${api}?page=${page}`)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err))
    }, [page])

    let planetsElements = data
        .map(planet => <PlanetsItem key={planet.name} name={planet.name} rotation_period={planet.rotation_period} orbital_period={planet.orbital_period}/>)

    // каждый второй элемент на цикле for
    // let newPlanetsArr = []

    // for (let i = 0; i < planetsElements.length; i++) {
    //     if (i % 2) {
    //         newPlanetsArr.push(planetsElements[i]) 
    //     }
    // }

    // каждый второй елемент на методе .filter()
    // let newPlanetsArr = planetsElements.filter((item, index) => index % 2 )

    return (
        <div className="content-wrap planets">
            <div className="text-wrap">
                <ul>
                    {planetsElements}
                </ul>
                
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={6}
                    marginPagesDisplayed={10}
                    pageRangeDisplayed={10}
                    onPageChange={crutch}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />

                {/* <button onClick={() => apiFunc(1)}>
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
                </button> */}
            </div>
        </div>
    )
}

export default PlanetsPage;