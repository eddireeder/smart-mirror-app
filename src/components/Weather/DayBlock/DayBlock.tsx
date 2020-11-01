import React from "react";
import "./DayBlock.scss";
import { Day, WeatherState } from "../enums";
import ClearIcon from "./ClearIcon/ClearIcon";
import CloudIcon from "./CloudyIcon/CloudyIcon";
import DrizzleIcon from "./DrizzleIcon/DrizzleIcon";
import RainIcon from "./RainIcon/RainIcon";
import SnowIcon from "./SnowIcon/SnowIcon";
import ThunderstormIcon from "./ThunderstormIcon/ThunderstormIcon";

type DayBlockProps = {
  day: Day,
  weather: WeatherState
};

const DayBlock: React.FC<DayBlockProps> = props => {
  const getFormattedDay = (): string => {
    switch (props.day) {
      case Day.Monday:
        return "Mon";
      case Day.Tuesday:
        return "Tue";
      case Day.Wednesday:
        return "Wed";
      case Day.Thursday:
        return "Thu";
      case Day.Friday:
        return "Fri";
      case Day.Saturday:
        return "Sat";
      case Day.Sunday:
        return "Sun";
    }
  }

  const getWeatherIcon = (): JSX.Element => {
    switch (props.weather) {
      case WeatherState.Clear:
        return <ClearIcon />;
      case WeatherState.Cloudy:
        return <CloudIcon />;
      case WeatherState.Drizzle:
        return <DrizzleIcon />;
      case WeatherState.Rain:
        return <RainIcon />;
      case WeatherState.Snow:
        return <SnowIcon />;
      case WeatherState.Thunderstorm:
        return <ThunderstormIcon />;
    }
  }

  return <div className="DayBlock">
      <div className="day">{getFormattedDay()}</div>
      {getWeatherIcon()}
    </div>;
};

export default DayBlock;
