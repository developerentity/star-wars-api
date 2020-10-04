import React, { useState } from 'react';
import './../App.css';


const MainMenu = (props) => {

    let { setShipNumber, searchString, setSearchString } = props;
    let [val, setVal] = useState(0)

    return (
        <div className="main-menu">
            <input
                type="number"
                placeholder="Enter ship number"
                onChange={(e) => setVal(e.target.value)}
            />
            <input type="submit" value="Find" onClick={() => { setShipNumber(parseInt(val)) }} />
            <input
                type='text'
                placeholder='Search'
                onChange={(e) => setSearchString(e.target.value)}
                value={searchString}
            />
            <input type='button' value='Clear' onClick={() => {localStorage.removeItem('swapiSearch'); setSearchString('')}} />
        </div>
    )
}

export default MainMenu;