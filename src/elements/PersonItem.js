import React from 'react';
import './../App.css';
import MainContent from './MainContent';

const PersonItem = (props) => {
    
    let starshipElements = props.data?.starships
        .map(starship => <MainContent key={starship.toString()} shipApi={starship} />)

    return (
        <div>
            <div>
                Name: {props.data?.name}<br />
                Birth date: {props.data?.birth_year}<br />
                Gender: {props.data?.gender}<br />
                Height: {props.data?.height}<br />
                Skin color: {props.data?.skin_color}<br />
            </div>
            <div className="personShip">
                {starshipElements}
            </div>
        </div>
    )
}

export default PersonItem;