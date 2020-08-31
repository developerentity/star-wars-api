import React, { useState } from 'react';
import './../App.css';


const MainMenu = (props) => {

    let { setShipNumber } = props;
    let [val, setVal] = useState(0)

    return (
        <div className="main-menu">
            <input
                type="number"
                placeholder="Enter ship number"
                onChange={(e) => setVal(e.target.value)}
            />
            <input type="submit" value="Find" onClick={() => { setShipNumber(val) }} />
        </div>
    )

}

export default MainMenu;