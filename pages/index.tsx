import type { NextPage } from "next";
import { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "../styles/App.module.css";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

type UnitSystem = "metric" | "imperial";

const App: NextPage = () => {
  const [cityInput, setCityInput] = useState<string>("Bucharest");
  const [triggerFetch, setTriggerFetch] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<any>();
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

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={weatherData.name}
        country={weatherData.sys.country}
        description={weatherData.weather[0].description}
        iconName={weatherData.weather[0].icon}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
          <Search
            placeHolder="Search a city..."
            value={cityInput}
            onFocus={(e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCityInput(e.target.value)
            }
            onKeyDown={(e: any) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.target.placeholder = "Search a city...";
            }}
          />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
      <Search
        onFocus={(e: ChangeEvent<HTMLInputElement>) => (e.target.value = "")}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCityInput(e.target.value)
        }
        onKeyDown={(e: KeyboardEvent) =>
          e.keyCode === 13 && setTriggerFetch(!triggerFetch)
        }
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
