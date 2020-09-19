import React from 'react';
import './../App.css';
import PersonItem from './PersonItem'

const PersonsContent = (props) => {

    const { searchArr, searchString, data } = props;
    
    if (searchString !== '') {
        return (
            <div className='search-block'>
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
