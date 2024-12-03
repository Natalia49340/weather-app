import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useSelector } from "react-redux";
import { TEMPERATURE_UNITS } from "../constants/temperatureUnits";

const cities = [
    { name: "Warszawa", temperature: 22, condition: "Słonecznie" },
    { name: "Wrocław", temperature: 20, condition: "Częściowo zachmurzone" },
    { name: "Gdańsk", temperature: 18, condition: "Deszczowo" },
    { name: "Kraków", temperature: 23, condition: "Słonecznie" },
    { name: "Poznań", temperature: 21, condition: "Pochmurno" },
];

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

export const Home = () => {
    const currentUnit = useSelector((state) => state.weather.temperatureUnits);

    return (
        <div className="home">
            <h1>Favourite cities</h1>
            <div className="city-list">
                {cities.map((city) => (
                    <Link to={`/details/${city.name}`} key={city.name} className="city-card">
                        <div className="city-info">
                            <h2>{city.name}</h2>
                            <p>{convertTemperature(city.temperature, currentUnit)}°{currentUnit}</p>
                            <p>{city.condition}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
