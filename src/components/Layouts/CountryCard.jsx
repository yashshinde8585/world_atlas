import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  //   const interestingFact = `Located in the region of ${region}.`;

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt || `${name.common} flag`} />

        <div className="countryInfo">
          <p className="card-title">
            {name.common.length > 13
              ? name.common.slice(0, 13) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {capital?.[0] || "N/A"}
          </p>
          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>

          {/* <p>
            <span className="card-description">Interesting Fact: </span>
            {interestingFact}
          </p> */}

          <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
