export type OpenWeatherResponse = {
  daily: OpenWeatherData[];
}

export type OpenWeatherData = {
  dt: number;
  weather: OpenWeatherDescription[];
}

export type OpenWeatherDescription = {
  description: string;
  icon: string;
  id: number;
  main: string;
}