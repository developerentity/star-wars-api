import React, { useState } from 'react';
import './../App.css';
import MainContent from '../elements/MainContent';
import MainMenu from './../elements/MainMenu';

const MainPage = () => {

    const [shipNumber, setShipNumber] = useState(9);

    return (
        <div className="main-page">
            <MainMenu
                setShipNumber={setShipNumber}
            />
            <MainContent
                shipNumber={shipNumber}
            />
        </div>
    )
}

export default MainPage;