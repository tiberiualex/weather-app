import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";
import { CurrentWeather, UnitSystem } from "../types/Types";

type DateAndTimeProps = {
  weatherData: CurrentWeather;
  unitSystem: UnitSystem;
};

export const DateAndTime = ({ weatherData, unitSystem }: DateAndTimeProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData)},
        ${getTime(unitSystem, weatherData.dt, weatherData.timezone)}
        ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
      </h2>
    </div>
  );
};
