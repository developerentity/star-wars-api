import React, { useState, useEffect } from 'react';
import './../App.css';


const PersonMenu = (props) => {

    let { setPersonId, setSearchList, searchString, setSearchString } = props;
    let [val, setVal] = useState(0)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?search=${searchString}`)
            .then(res => res.json())
            .then(res => setSearchList(res.results))
            .catch(err => console.error(err))
    }, [searchString])

    return (
        <div>
            <div className="main-menu">
                <input
                    type="number"
                    placeholder="Enter person id"
                    onChange={(e) => setVal(e.target.value)}
                />
                <input type="submit" value="Find" onClick={() => { setPersonId(val) }} />
            </div>
            <div className="search-wrap">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </div>
        </div>
    )
}

export default PersonMenu;