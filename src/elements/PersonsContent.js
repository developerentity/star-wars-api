import React from 'react';
import './../App.css';
import PersonItem from './PersonItem'

const PersonsContent = (props) => {

    const { searchList, searchString, data } = props;

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
