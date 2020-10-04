import React from 'react';
import './../App.css';
import Clock from './Clock'
import {
    Link,
    useLocation
} from "react-router-dom";

const Menu = () => {

    let location = useLocation();

    return (
        <div className="menu">
            <Clock />
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Main</Link>
            <Link className={location.pathname === "/persons" ? "active" : ""} to="/persons">Persons</Link>
            <Link className={location.pathname === "/planets" ? "active" : ""} to="/planets">Planets</Link>
        </div>
    )
}

export default Menu;