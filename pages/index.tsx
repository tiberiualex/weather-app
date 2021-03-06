import { useState, ChangeEvent } from "react";
import styles from "../styles/App.module.css";
import useSWR, { SWRConfig } from "swr";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";
import { CurrentWeather, UnitSystem } from "../types/Types";

const dev = process.env.NODE_ENV !== "production";

const server = dev ? "http://localhost:3000" : "http://localhost:3000";

const fetcher = (url: string) =>
  fetch(`${server}/${url}`).then((res) => res.json());

function useWeather(city: string) {
  const { data, error } = useSWR(`api/weather/${city}`, fetcher);

  return {
    weatherData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export async function getServerSideProps() {
  const weatherData = await fetcher(`api/weather/Paris`);

  return {
    props: {
      fallback: {
        [`api/weather/Paris`]: weatherData,
      },
    },
  };
}

const WeatherApp = () => {
  const [cityInput, setCityInput] = useState<string>("Bucharest");
  const [searchTerm, setSearchTerm] = useState<string>("Bucharest");
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const { weatherData } = useWeather(searchTerm);

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
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCityInput(e.target.value);
            }}
            onSubmit={(e: SubmitEvent) => {
              e.preventDefault();
              setSearchTerm(cityInput);
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
        placeHolder="Search a city..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCityInput(e.target.value);
        }}
        onSubmit={(e: SubmitEvent) => {
          e.preventDefault();
          setSearchTerm(cityInput);
        }}
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

const App = ({ fallback }: { fallback: CurrentWeather }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <WeatherApp />
    </SWRConfig>
  );
};

export default App;
