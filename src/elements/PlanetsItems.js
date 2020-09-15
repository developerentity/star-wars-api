import React from 'react';

const PlanetsItem = (props) => {
    return (
        <div>
            <li>
                Name: {props.name},
                Orbital period: {props.orbital_period},
                Rotation period: {props.rotation_period};
            </li>
            <br />
        </div>
    )
}

export default PlanetsItem;