import React from 'react';
import './DetailsForThisDay.css';

import { v4 as uuidv4 } from 'uuid';
import { copyOfDetails, time } from '../../../helper';

const DetailsForThisDay = ({ currentWeather, days }) => {
    
    const current = currentWeather && currentWeather;
    const sevenDays = days && days[0];

    const row = [
        copyOfDetails('sunrise',time(sevenDays.sunrise_ts),null ,null, uuidv4()),
        copyOfDetails('sunset',time(sevenDays.sunset_ts),null ,null, uuidv4()), 
        copyOfDetails('Probability of Precipitation',sevenDays.pop,null,'%', uuidv4()),
        copyOfDetails('humidity',Math.round(current.rh), null,'%', uuidv4()),
        copyOfDetails('wind',current.wind_cdir, Math.round(current.wind_spd),'m/s', uuidv4()),
        copyOfDetails('feels like',Math.round(current.app_temp),null,<sup>o</sup>, uuidv4()),
        copyOfDetails('preciption',current.precip.toFixed(2),null,'mm/hr', uuidv4()),
        copyOfDetails('pressure',Math.round(current.pres),null,'mb', uuidv4()),
        copyOfDetails('visibility',current.vis,null,'KM', uuidv4()),
        copyOfDetails('uv index',Math.round(current.uv),null,null, uuidv4()),
        copyOfDetails('Air Quality Index',current.aqi,null,null, uuidv4()),
        copyOfDetails('snow',current.snow,null, 'mm/hr', uuidv4()),
    ];

    return (

    	<div className='currentDayWeatherDetails'>
            {row.map(data => data)}
        </div>
        
    );
};

export default DetailsForThisDay;