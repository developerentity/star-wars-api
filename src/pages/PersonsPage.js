import React, { useState, useEffect } from 'react';
import './../App.css';
import PersonsMenu from './../elements/PersonsMenu';
import PersonsContent from './../elements/PersonsContent';

const PersonsPage = () => {

    const [data, setData] = useState(null);
    const [searchList, setSearchList] = useState([]);
    const [searchList2, setSearchList2] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [personId, setPersonId] = useState(1);
    const [api, setApi] = useState('');

    const searchingPerson = (url) => {
        setApi(url)
        localStorage.setItem('searchString', searchString)
        setSearchString('')
    };

    let personArr = [...searchList]
    let starshipArr = [...searchList2]

    let arr = personArr.concat(starshipArr)

    const searchArr = arr
        .map(item =>
            (<li key={item.name} onClick={() => searchingPerson(item.url)}>
                {item.name}
            </li>)
        );

    useEffect(() => {
        if (localStorage.getItem("searchString")) {
            setSearchString(localStorage.getItem("searchString"))
            localStorage.removeItem("searchString")
        }
    }, [])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?search=${searchString}`)
            .then(res => res.json())
            .then(res => setSearchList(res.results))
            .catch(err => console.error(err))
        fetch(`https://swapi.dev/api/starships/?search=${searchString}`)
            .then(res => res.json())
            .then(res => setSearchList2(res.results))
            .catch(err => console.error(err))
    }, [searchString])

    useEffect(() => {
        fetch(api || `https://swapi.dev/api/people/${personId}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
    }, [personId, api])

    return (
        <div className="main-page">
            <PersonsMenu
                setSearchList={setSearchList}
                setSearchString={setSearchString}
                searchString={searchString}
                setData={setData}
                setPersonId={setPersonId}
            />
            <div className="content-wrap">
                <PersonsContent
                    searchList={searchList}
                    searchString={searchString}
                    data={data}
                    searchArr={searchArr}
                />
            </div>
        </div>
    )
}

export default PersonsPage;