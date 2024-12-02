import React from "react";
import { useParams } from "react-router-dom";
import { useCityWeather } from "../hooks/index.js";
import "./Details.css";

export const Details = () => {
  const { cityName } = useParams();
  const weatherData = useCityWeather(cityName);

  if (!weatherData) {
    return <div>Loading weather data for {cityName}...</div>;
  }

  const { current, forecast } = weatherData;

  return (
    <div className="details">
      <h2>Bieżąca pogoda {cityName}</h2>
      <div className="current-weather">
        <h3>Bieżąca pogoda</h3>
        <p>{current.icon} {current.condition}</p>
        <p>Temperatura: {current.temperature}°C</p>
        <p>Opady: {current.precipitation.probability}% ({current.precipitation.amount} mm)</p>
        <p>Wiatr: {current.wind.speed} m/s, {current.wind.direction}</p>
        <p>Zachmurzenie: {current.cloudiness}%</p>
      </div>
      <h3>Prognoza 5-dniowa</h3>
      <div className="forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{day.date}</p>
            <p>{day.icon} {day.condition}</p>
            <p>Temp: {day.temperature}°C</p>
            <p>Opady: {day.precipitation.probability}% ({day.precipitation.amount} mm)</p>
            <p>Wiatr: {current.wind.speed} m/s, {current.wind.direction}</p>
            <p>Zachmurzenie: {current.cloudiness}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
