import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={visited ? "visited" : "box"}>
      <h3 style={{ color: visited ? "black" : "white" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <p>
        {visited
          ? "Already visited the country"
          : "I want to visit the country"}
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
    </div>
  );
};

export default Country;
