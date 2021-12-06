import type { NextApiRequest, NextApiResponse } from "next";
import { WeatherRequest } from "../../types/Types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherRequest>
) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  );

  const data = await getWeatherData.json();
  res.status(200).json(data);
}
