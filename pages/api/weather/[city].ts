import type { NextApiRequest, NextApiResponse } from "next";
import { CurrentWeather } from "../../../types/Types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CurrentWeather>
) {
  console.log(req.query.city);
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const data: CurrentWeather = await getWeatherData.json();
  res.status(200).json(data);
}
