import React from "react";
import { render, screen } from "@testing-library/react";
import DayBlock from "./DayBlock";
import { Day, WeatherState } from "../enums";

test('renders the given day', () => {
  const { rerender } = render(<DayBlock day={Day.Monday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Mon')).toBeInTheDocument();

  rerender(<DayBlock day={Day.Tuesday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Tue')).toBeInTheDocument();

  rerender(<DayBlock day={Day.Wednesday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Wed')).toBeInTheDocument();

  rerender(<DayBlock day={Day.Thursday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Thu')).toBeInTheDocument();

  rerender(<DayBlock day={Day.Friday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Fri')).toBeInTheDocument();

  rerender(<DayBlock day={Day.Saturday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Sat')).toBeInTheDocument();

  rerender(<DayBlock day={Day.Sunday} weather={WeatherState.Clear}/>);
  expect(screen.getByText('Sun')).toBeInTheDocument();
});

test('renders the correct weather icon', () => {
  const { rerender } = render(<DayBlock day={Day.Monday} weather={WeatherState.Clear}/>);
  expect(screen.getByRole('img')).toHaveClass('ClearIcon');

  rerender(<DayBlock day={Day.Monday} weather={WeatherState.Drizzle}/>);
  expect(screen.getByRole('img')).toHaveClass('DrizzleIcon');

  rerender(<DayBlock day={Day.Monday} weather={WeatherState.Rain}/>);
  expect(screen.getByRole('img')).toHaveClass('RainIcon');

  rerender(<DayBlock day={Day.Monday} weather={WeatherState.Cloudy}/>);
  expect(screen.getByRole('img')).toHaveClass('CloudyIcon');

  rerender(<DayBlock day={Day.Monday} weather={WeatherState.Snow}/>);
  expect(screen.getByRole('img')).toHaveClass('SnowIcon');

  rerender(<DayBlock day={Day.Monday} weather={WeatherState.Thunderstorm}/>);
  expect(screen.getByRole('img')).toHaveClass('ThunderstormIcon');
});