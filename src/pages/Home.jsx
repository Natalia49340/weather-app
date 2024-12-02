import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const cities = [
    { name: "Warszawa", temperature: 22, condition: "Słonecznie" },
    { name: "Wrocław", temperature: 20, condition: "Częściowo zachmurzone" },
    { name: "Gdańsk", temperature: 18, condition: "Deszczowo" },
    { name: "Kraków", temperature: 23, condition: "Słonecznie" },
    { name: "Poznań", temperature: 21, condition: "Pochmurno" },
];

export const Home = () => {
    return (
        <div className="home">
            <h1>Favourite cities</h1>
            <div className="city-list">
                {cities.map((city) => (
                    <Link to={`/details/${city.name}`} key={city.name} className="city-card">
                        <div className="city-info">
                            <h2>{city.name}</h2>
                            <p>{city.temperature}°C</p>
                            <p>{city.condition}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
