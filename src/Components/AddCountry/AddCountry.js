import React from 'react';
import './AddCountry.css'

const AddCountry = (props) => {
   const addCountry = props.addCountry;
    let population = 0;
    for (let i = 0; i < addCountry.length; i++) {
        const country = addCountry[i];
        population= population + country.population;
        
    }
    return (
        <div className='addCountry'>
            <h2>selected Country : {addCountry.length}</h2>
            <h3>total population : {population} </h3>
        </div>
    );
};

export default AddCountry;