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
            <div className="content-wrap">
                <MainContent
                    shipNumber={shipNumber}
                />
            </div>        
        </div>
    )
}

export default MainPage;