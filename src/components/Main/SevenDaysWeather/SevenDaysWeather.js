import React from 'react';
import './SevenDaysWeather';

import {Table, TableBody, TableCell, TableContainer, TableRow} from '@material-ui/core';

import { v4 as uuidv4 } from 'uuid';

import { 
  dayOfWeek, 
  imgPath, 
  altOfImgPath, 
  temp 
} from '../../../helper';


const SevenDaysWeather = ({days}) => {

    const sevenDays = days && days;

    return (

    	<TableContainer>
          <Table size="medium" aria-label="Weather 7 days">
            <TableBody>
              {sevenDays.map((data,index) => (
               index === 0 ? null : 
                <TableRow key={uuidv4()}>

                  <TableCell style={{padding: '10px 0'}} align="center">
                    {dayOfWeek(data)}
                  </TableCell>
                    
                  <TableCell style={{padding: '10px 0'}} align="center">
                    <img src={imgPath(data)} alt={altOfImgPath(data)} />
                    <p>{data.weather.description}</p>
                  </TableCell>

                  <TableCell style={{padding: '10px 0'}} align="center">
                    {temp(data)}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
    );
};
export default SevenDaysWeather;
