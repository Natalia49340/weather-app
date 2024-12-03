import React from "react";
import { useParams } from "react-router-dom";
import { useCityWeather } from "../hooks/index.js";
import "./Details.css";
import { useSelector } from "react-redux";
import { TEMPERATURE_UNITS } from "../constants/temperatureUnits";

const convertTemperature = (tempCelsius, unit) => {
    switch (unit) {
        case TEMPERATURE_UNITS.FAHRENHEIT:
            return (tempCelsius * 9) / 5 + 32;
        case TEMPERATURE_UNITS.KELVIN:
            return tempCelsius + 273.15;
        default:
            return tempCelsius;
    }
};

export const Details = () => {
  const { cityName } = useParams();
  const weatherData = useCityWeather(cityName);
  const currentUnit = useSelector((state) => state.weather.temperatureUnits);

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
        <p>Temperatura: {convertTemperature(current.temperature, currentUnit)}°{currentUnit}</p>
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
            <p>Temp: {convertTemperature(day.temperature, currentUnit)}°{currentUnit}</p>
            <p>Opady: {day.precipitation.probability}% ({day.precipitation.amount} mm)</p>
            <p>Wiatr: {current.wind.speed} m/s, {current.wind.direction}</p>
            <p>Zachmurzenie: {current.cloudiness}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
