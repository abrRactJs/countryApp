import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, alpha2Code, flag } = props.countryInfo;
    const handleAddCountry = props.handleAddCountry;
   
    return (
        <div className='countryInfo'>
            <h4>Country :{name} </h4>
            <img src={flag} alt="" />
            <h5>Population : {population} </h5>
            <h5>alpha code  : {alpha2Code}</h5>
            <button onClick={()=>handleAddCountry(props.countryInfo)}>Country Add</button>
        </div>
    );
};

export default Country;