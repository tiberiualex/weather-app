export const ctoF = (c: number): number => (c * 9) / 5 + 32;

export const mpsToMph = (mps: number): string => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km: number): string => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time: string): string => {
  const [hours, minutes] = time.split(":");
  let h = Number(hours);
  return `${(h %= 12) ? h : 12}:${minutes}}`;
};

export const degToCompass = (num: number): string => {
  const val = Math.round(num / 22.5);
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  return directions[val % 16];
};

export const unixToLocalTime = (unixSeconds: number, timezone: number) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)![0];

  return time.startsWith("0") ? time.substring(1) : time;
};
