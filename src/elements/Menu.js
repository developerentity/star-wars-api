import React from 'react';
import './../App.css';
import {
    Link,
    useLocation
} from "react-router-dom";

const Menu = () => {

    let location = useLocation();

    return (
        <div className="menu">
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Main</Link>
            <Link className={location.pathname === "/persons" ? "active" : ""} to="/persons">Persons</Link>
            <Link className={location.pathname === "/planets" ? "active" : ""} to="/planets">Planets</Link>
            <Link className={location.pathname === "/clock" ? "active" : ""} to="/clock">Clock</Link>
        </div>
    )
}

export default Menu;