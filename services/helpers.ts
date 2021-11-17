import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem: string, windInMps: number): string =>
  unitSystem === "metric" ? String(windInMps) : mpsToMph(windInMps);

export const getVisibility = (unitSystem: string, visibilityInMeters: number) =>
  unitSystem === "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (
  unitSystem: string,
  currentTime: number,
  timezone: number
) =>
  unitSystem == "metric"
    ? unixToLocalTime(currentTime, timezone)
    : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (
  unitSystem: string,
  currentTime: number,
  timezone: number
) => {
  unitSystem === "imperial"
    ? Number(unixToLocalTime(currentTime, timezone).split(":")[0]) >= 12
      ? "PM"
      : "AM"
    : "";
};

export const getWeekDay = (weatherData: any) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};
