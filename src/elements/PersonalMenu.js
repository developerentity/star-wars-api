import React, { useState } from 'react';
import './../App.css';


const PersonalMenu = (props) => {

    let { setPersonId } = props;
    let [val, setVal] = useState(0)

    return (
        <div className="main-menu">
            <input
                type="number"
                placeholder="Enter person id"
                onChange={(e) => setVal(e.target.value)}
            />
            <input type="submit" value="Find" onClick={() => { setPersonId(val) }} />
        </div>
    )

}

export default PersonalMenu;