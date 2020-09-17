import React, { useState, useEffect } from 'react';
import './../App.css';
import PersonsMenu from './../elements/PersonsMenu';
import PersonalContent from './../elements/PersonsContent';

const PersonsPage = () => {

    const [data, setData] = useState(null);
    const [searchList, setSearchList] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [personId, setPersonId] = useState(1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?search=${searchString}`)
            .then(res => res.json())
            .then(res => setSearchList(res.results))
            .catch(err => console.error(err))
    }, [searchString])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${personId}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
    }, [personId])

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
                <PersonalContent
                    searchList={searchList}
                    searchString={searchString}
                    data={data}
                />
            </div>
        </div>
    )
}

export default PersonsPage;