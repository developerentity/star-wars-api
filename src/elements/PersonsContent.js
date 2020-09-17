import React, { useState, useEffect } from 'react';
import './../App.css';
import PersonItem from './PersonItem'

const api = 'https://swapi.dev/api/'

const PersonsContent = (props) => {

    const { personId, searchList, searchString } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${api}people/${personId}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
    }, [personId])

    let searchArr = searchList.map(item => <div key={item.name}>{item.name}</div>)
    
    if (searchString !== '') {
        return (
            <div>
                Results:<br />
                {searchArr}
            </div>
        )
    } else {
        if (data?.name) {
            return (
                <div>
                    <PersonItem data={data} />
                </div>
            )
        } else {
            return (
                <div className="noStarShip text-wrap">
                    <div>Person not found</div>
                </div>
            )
        }
    }
}

export default PersonsContent;
