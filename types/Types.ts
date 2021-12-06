export type WeatherRequest = {
  cityInput: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Coordinates = {
  lon: number;
  lat: number;
};

export type MainWeatherDetails = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
};

export type System = {
  type: number; // Internal parameter
  id: number; // Internal parameter
  country: string;
  sunrise: number; // Sunrise time, unix, UTC
  sunset: number; // Sunset time, unix, UTC
};

export type CurrentWeather = {
  weather: Weather[];
  coord: Coordinates;
  base: string; // Internal parameter
  main: MainWeatherDetails;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number; // Time of data calculation, unix, UTC
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: 200; // Internal parameter
};

export type Directions =
  | "N"
  | "NNE"
  | "NE"
  | "ENE"
  | "E"
  | "ESE"
  | "SE"
  | "SSE"
  | "S"
  | "SSW"
  | "SW"
  | "WSW"
  | "W"
  | "WNW"
  | "NW"
  | "NNW";

export type Weekdays =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
