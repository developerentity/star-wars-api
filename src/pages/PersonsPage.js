import React, { useState } from 'react';
import './../App.css';
import PersonalMenu from './../elements/PersonalMenu';
import PersonalContent from './../elements/PersonsContent';

const PersonsPage = () => {

    const [personId, setPersonId] = useState(1);
    const [searchList, setSearchList] = useState([]);
    const [searchString, setSearchString] = useState('');

    return (
        <div className="main-page">
            <PersonalMenu
                setPersonId={setPersonId}
                setSearchList={setSearchList}
                setSearchString={setSearchString}
                searchString={searchString}
            />
            <div className="content-wrap">
                <PersonalContent
                    personId={personId}
                    searchList={searchList}
                    searchString={searchString}
                />
            </div>
        </div>
    )
}

export default PersonsPage;