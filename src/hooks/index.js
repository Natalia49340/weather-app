import { useState, useEffect } from "react";

const mockWeatherData = {
    Warszawa: {
      current: {
        temperature: 22,
        condition: "Słonecznie",
        icon: "☀️",
        precipitation: { probability: 10, amount: 0 },
        wind: { speed: 5, direction: "NE" },
        cloudiness: 10,
      },
      forecast: [
        { date: "2024-12-03", temperature: 21, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 20, amount: 1 }, wind: { speed: 7, direction:"E"}, cloudiness: 50, },
        { date: "2024-12-04", temperature: 20, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 50, amount: 3 } },
        { date: "2024-12-05", temperature: 19, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 5, amount: 0 } },
        { date: "2024-12-06", temperature: 18, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 25, amount: 0.5 } },
        { date: "2024-12-07", temperature: 17, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 60, amount: 2 } },
      ],
    },
    Wrocław: {
      current: {
        temperature: 20,
        condition: "Pochmurno",
        icon: "🌥️",
        precipitation: { probability: 30, amount: 0.5 },
        wind: { speed: 6, direction: "SW" },
        cloudiness: 40,
      },
      forecast: [
        { date: "2024-12-03", temperature: 19, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 40, amount: 2 } },
        { date: "2024-12-04", temperature: 18, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 5, amount: 0 } },
        { date: "2024-12-05", temperature: 17, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 20, amount: 0.2 } },
        { date: "2024-12-06", temperature: 16, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 50, amount: 1.5 } },
        { date: "2024-12-07", temperature: 15, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 10, amount: 0 } },
      ],
    },
    Gdańsk: {
      current: {
        temperature: 18,
        condition: "Deszczowo",
        icon: "🌧️",
        precipitation: { probability: 70, amount: 5 },
        wind: { speed: 8, direction: "N" },
        cloudiness: 60,
      },
      forecast: [
        { date: "2024-12-03", temperature: 17, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 80, amount: 6 } },
        { date: "2024-12-04", temperature: 16, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 30, amount: 1 } },
        { date: "2024-12-05", temperature: 15, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 10, amount: 0 } },
        { date: "2024-12-06", temperature: 14, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 60, amount: 2 } },
        { date: "2024-12-07", temperature: 13, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 25, amount: 0.5 } },
      ],
    },
    Kraków: {
      current: {
        temperature: 23,
        condition: "Słonecznie",
        icon: "☀️",
        precipitation: { probability: 10, amount: 0 },
        wind: { speed: 4, direction: "E" },
        cloudiness: 5,
      },
      forecast: [
        { date: "2024-12-03", temperature: 22, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 15, amount: 0.5 } },
        { date: "2024-12-04", temperature: 21, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 40, amount: 2 } },
        { date: "2024-12-05", temperature: 20, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 5, amount: 0 } },
        { date: "2024-12-06", temperature: 19, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 20, amount: 0.2 } },
        { date: "2024-12-07", temperature: 18, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 50, amount: 1 } },
      ],
    },
    Poznań: {
      current: {
        temperature: 21,
        condition: "Pochmurno",
        icon: "🌥️",
        precipitation: { probability: 25, amount: 0.2 },
        wind: { speed: 7, direction: "W" },
        cloudiness: 35,
      },
      forecast: [
        { date: "2024-12-03", temperature: 20, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 10, amount: 0 } },
        { date: "2024-12-04", temperature: 19, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 50, amount: 3 } },
        { date: "2024-12-05", temperature: 18, condition: "Pochmurno", icon: "🌥️", precipitation: { probability: 20, amount: 0.5 } },
        { date: "2024-12-06", temperature: 17, condition: "Deszczowo", icon: "🌧️", precipitation: { probability: 60, amount: 1 } },
        { date: "2024-12-07", temperature: 16, condition: "Słonecznie", icon: "☀️", precipitation: { probability: 5, amount: 0 } },
      ],
    },
  };
  

export const useCityWeather = (cityName) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Symulacja pobierania danych (użycie statycznych danych)
    const data = mockWeatherData[cityName];
    setWeatherData(data);
  }, [cityName]);

  return weatherData;
};
