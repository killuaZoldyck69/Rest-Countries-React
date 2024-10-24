import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countires = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visited, setVisited] = useState([]);
  const handleVisitedCountries = (country) => {
    setVisited([...visited, country]);
    console.log(country);
  };

  return (
    <div>
      <h3>Countires: {countries.length}</h3>
      <h3>Visited Countries:{visited.length}</h3>
      <ul style={{ textAlign: "left" }}>
        {visited.map((country) => (
          <li
            key={country.name.common}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            {country.name.common}
            <img src={country.flags.png} width="20" height="15" />
          </li>
        ))}
      </ul>
      <div className="display-grid">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countires;
