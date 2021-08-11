import React from 'react';
import './WeatherBy24Hour.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import { v4 as uuidv4 } from 'uuid';

import {imgPath, altOfImgPath, pop, perSlide} from '../../../helper';




const WeatherBy24Hour = ({ byHour }) => {

    const day24H = byHour && byHour;

    return (

    	<div className='slider'>
        	<Swiper 
                slidesPerView={perSlide()} 
                spaceBetween={0}  
                className="mySwiper"
            >
                {day24H && day24H.map((data,index) => 
                    <SwiperSlide style={{textAlign: 'center'}} key={uuidv4()}>
                        <p>{index === 0 ? 'Now' : data.timestamp_local.slice(11,16)}</p>
                        {pop(data)}
                        <img src={imgPath(data)} alt={altOfImgPath(data)}/>
                        <p>{Math.round(data.temp)}<sup>o</sup></p>
                    </SwiperSlide>
                    )
                }
            </Swiper>
    	</div>
        
    );
};
export default WeatherBy24Hour;
