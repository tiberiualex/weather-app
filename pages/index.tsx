import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/App.module.css";

type UnitSystem = "metric" | "imperial";

const App: NextPage = () => {
  const [cityInput, setCityInput] = useState<string>("Bucharest");
  const [triggerFetch, setTriggerFetch] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");

  return (
    <div className={styles.wrapper}>
      <p>Weather App wrapper</p>
    </div>
  );
};

export default App;
