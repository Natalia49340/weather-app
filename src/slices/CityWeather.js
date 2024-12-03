import React from 'react';
import { useSelector } from 'react-redux';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';
import TemperatureSwitcher from '../components/TemperatureSwitcher';

const CityWeather = () => {
    const currentUnit = useSelector((state) => state.weather.temperatureUnits);

    const mockWeatherData = {
        Warszawa: { current: { temperature: 22, condition: 'Słonecznie' } },
    };

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

    const currentTemp = convertTemperature(
        mockWeatherData.Warszawa.current.temperature,
        currentUnit
    );

    return (
        <div>
            <h2>Warszawa</h2>
            <p>
                Aktualna temperatura: {currentTemp}°{currentUnit}
            </p>
            <TemperatureSwitcher />
        </div>
    );
};

export default CityWeather;
