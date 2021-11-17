import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/App.module.css";

type UnitSystem = "metric" | "imperial";

const App: NextPage = () => {
  const [cityInput, setCityInput] = useState<string>("Bucharest");
  const [triggerFetch, setTriggerFetch] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityInput }),
      });

      const data = await res.json();
      setWeatherData({ ...data });
      setCityInput("");
    };

    getData();
  }, [triggerFetch]);

  console.log(weatherData);

  return (
    <div className={styles.wrapper}>
      <p>Weather App wrapper</p>
    </div>
  );
};

export default App;
