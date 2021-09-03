import React, { useState, useEffect } from "react";
import "./Main.css";

import Head from "./Head/Head";
import WeatherBy24Hour from "./WeatherBy24Hour/WeatherBy24Hour";
import SevenDaysWeather from "./SevenDaysWeather/SevenDaysWeather";
import DetailsForThisDay from "./DetailsForThisDay/DetailsForThisDay";

import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { apiKey, baseURL } from "../../comunicator";
import { locationPath, bckgImg } from "../../helper";

const Main = ({ cityName }) => {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [byHour, setByHour] = useState(null);
  const [days, setDays] = useState(null);

  useEffect(() => {
    if (!cityName) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, [cityName]);

  const fetchData = (place) => {
    axios
      .all([
        axios.get(`${baseURL}current?${place}&key=${apiKey}&include=minutely`),
        axios.get(`${baseURL}forecast/hourly?${place}&key=${apiKey}&hours=24`),
        axios.get(`${baseURL}forecast/daily?${place}&key=${apiKey}&days=8`),
      ])
      .then(
        axios.spread((currW, day24Hours, sevenDaysW) => {
          currW.status === 200 && setCurrentWeather(currW.data.data[0]);
          day24Hours.status === 200 && setByHour(day24Hours.data);
          sevenDaysW.status === 200 && setDays(sevenDaysW.data.data);
        })
      )
      .catch((err) => alert(err));
  };

  useEffect(() => {
    location && fetchData(locationPath(location));
  }, [location]);

  useEffect(() => {
    cityName && setLocation(null);
    cityName && fetchData(`${"city=" + cityName}`);
  }, [cityName]);

  useEffect(() => {
    bckgImg(currentWeather);
  }, [currentWeather, byHour, days]);

  const component = [
    <Head currentWeather={currentWeather} />,
    <WeatherBy24Hour byHour={byHour} currentWeather={currentWeather} />,
    <SevenDaysWeather days={days} />,
    <DetailsForThisDay currentWeather={currentWeather} days={days} />,
  ];

  return currentWeather && byHour && days ? (
    <div className="main">
      <Grid container style={{ justifyContent: "center" }} spacing={2}>
        {component.map((component) => (
          <Grid item xs={10} sm={12} md={12} key={uuidv4()}>
            {component}
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <img
      src="./loadingCloud.gif"
      alt="cloud loader"
      style={{
        display: "block",
        margin: "auto",
        height: "70vh",
        width: "50%",
      }}
    />
  );
};
export default Main;
