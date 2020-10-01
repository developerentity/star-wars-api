import React from 'react';
import './../App.css';

const StarshipItem = (props) => {

    const { data } = props;

    if (data?.name) {
        return (
            <div className="text-wrap">
                Name: {data?.name}<br />
                Model: {data?.model}<br />
                Manufacturer: {data?.manufacturer}<br />
                Starship class: {data?.starship_class}<br />
            </div>
        )
    } else {
        return (
            <div className="noStarShip">
                <div className="noStarShipIn">Starship not found</div>
            </div>
        )
    }
}

export default StarshipItem;