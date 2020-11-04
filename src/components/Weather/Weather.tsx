import React, { useEffect, useState } from "react";
import "./Weather.scss";
import Axios, { AxiosResponse } from "axios";
import config from "../../config";
import DayBlock from "./DayBlock/DayBlock";
import { Day, WeatherState } from "./enums";
import { OpenWeatherData, OpenWeatherResponse } from "./types";

const Weather: React.FC = () => {
  const [dailyOpenWeatherData, setDailyOpenWeatherData] = useState<OpenWeatherData[]>([]);

  useEffect(() => {
    updateWeather();
  }, []);

  const updateWeather = async () => {
    const response: AxiosResponse<OpenWeatherResponse> = await Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${config.openWeather.lat}&lon=${config.openWeather.lon}&appid=${config.openWeather.apiKey}`)
    setDailyOpenWeatherData(response.data.daily);
  }

  const renderDailyWeather = (): JSX.Element => {
    const elements: JSX.Element[] = [];
    for (const openWeatherData of dailyOpenWeatherData) {
      const day: Day = new Date(openWeatherData.dt * 1000).getDay();
      const weather: WeatherState = idToWeatherState(openWeatherData.weather[0].id);
      elements.push(<DayBlock day={day} weather={weather}/>)
    }
    return (
      <div className="daily">
        {elements}
      </div>
    );
  }

  const idToWeatherState = (id: number): WeatherState => {
    if (id > 800) {
      return WeatherState.Cloudy;
    } else if (id >= 700) {
      return WeatherState.Clear;
    } else if (id >= 600) {
      return WeatherState.Snow;
    } else if (id >= 500) {
      return WeatherState.Rain;
    } else if (id >= 300) {
      return WeatherState.Drizzle;
    }
    return WeatherState.Thunderstorm;
  }

  return <div className="Weather">
    {renderDailyWeather()}
  </div>;
};

export default Weather;
