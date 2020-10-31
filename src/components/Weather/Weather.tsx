import React, { useEffect } from "react";
import "./Weather.scss";
import Axios from "axios";
import config from "../../config";

const Weather: React.FC = () => {
  useEffect(() => {
    updateWeather();
  }, []);

  const updateWeather = async () => {
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${config.openWeather.lat}&lon=${config.openWeather.lon}&appid=${config.openWeather.apiKey}`)
    console.log(response);
  }

  return <div className="Weather"></div>;
};

export default Weather;
