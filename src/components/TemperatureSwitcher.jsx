import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTemperatureUnits } from '../slices/weatherSlice';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

const TemperatureSwitcher = () => {
    const dispatch = useDispatch();
    const currentUnit = useSelector((state) => state.weather.temperatureUnits);

    const handleChange = (newUnit) => {
        dispatch(setTemperatureUnits(newUnit));
    };

    return (
        <div>
            {Object.values(TEMPERATURE_UNITS).map((unit) => (
                <button
                    key={unit}
                    className={`temp-switcher-btn ${currentUnit === unit ? 'active' : ''}`}
                    onClick={() => handleChange(unit)}
                    
                >
                    {unit}
                </button>
            ))}
        </div>
    );
};

export default TemperatureSwitcher;
