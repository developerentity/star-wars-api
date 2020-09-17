import React, { useState } from 'react';
import './../App.css';

const PersonMenu = (props) => {

    const { setSearchString, setPersonId } = props;
    const [val, setVal] = useState(0)
    // const [personId, setPersonId] = useState(1);

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/people/?search=${searchString}`)
    //         .then(res => res.json())
    //         .then(res => setSearchList(res.results))
    //         .catch(err => console.error(err))
    // }, [searchString])

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/people/${personId}/`)
    //         .then(res => res.json())
    //         .then(res => setData(res))
    //         .catch(err => console.error(err))
    // }, [personId])

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