import React, { useState, useEffect } from 'react';
import './../App.css';
import MainContent from '../elements/MainContent';
import MainMenu from './../elements/MainMenu';

const MainPage = () => {

    const [shipNumber, setShipNumber] = useState(9);
    const [searchString, setSearchString] = useState('');
    const [searchArr, setSearchArr] = useState([]);

    const selectItem = (url) => {
        setShipNumber(url)
        setSearchString('')
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/?search=${searchString}`)
            .then(res => res.json())
            .then(res => setSearchArr(res.results))
            .catch(err => console.error(err))
    }, [searchString])

    let searchList = searchArr
        .map(item => <li key={item.name.toString()} onClick={() => selectItem(item.url)}>
            {item.name}
        </li>)

    return (
        <div className="main-page">
            <MainMenu
                setShipNumber={setShipNumber}
                searchString={searchString}
                setSearchString={setSearchString}
            />
            <div className="content-wrap">
                <MainContent
                    data={shipNumber}
                    searchList={searchList}
                    searchString={searchString}
                />
            </div>
        </div>
    )
}

export default MainPage;