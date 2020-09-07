import React, { useState } from 'react';
import './../App.css';
import PersonalMenu from './../elements/PersonalMenu';
import PersonalContent from './../elements/PersonsContent';

const PersonsPage = () => {

    const [personId, setPersonId] = useState(1);

    return (
        <div className="main-page">
            <PersonalMenu
                setPersonId={setPersonId}
            />
            <div className="content-wrap">
                <PersonalContent
                    personId={personId}
                />
            </div>
        </div>
    )
}

export default PersonsPage;