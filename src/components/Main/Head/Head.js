import React from 'react';
import './Head.css';

const Head = ({currentWeather}) => {

    const current = currentWeather && currentWeather;
    
    return (

    	<div className='head'>
    		<p id='cityName'><strong>{current.city_name}</strong></p>
    		<p id='cityTemp'><strong>{Math.round(current.temp)}<sup>o</sup></strong></p>
    		<p><strong>{current.weather.description}</strong></p>
    	</div>
        
    );
};
export default Head;
