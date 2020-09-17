import React, { useState } from 'react';
import './../App.css';

const PersonMenu = (props) => {

    const { setSearchString, searchString, setPersonId } = props;
    const [val, setVal] = useState(0)

    return (
        <div>
            <div className="main-menu">
                <input
                    type="number"
                    placeholder="Enter person id"
                    onChange={(e) => setVal(e.target.value)}
                />
                <input type="submit" value="Find" onClick={() => { setPersonId(val) }} />
                <input
                    className="search-textarea"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchString(e.target.value)}
                    value={searchString}
                />
            </div>
        </div>
    )
}

export default PersonMenu;