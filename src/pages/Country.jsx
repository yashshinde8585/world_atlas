import { useEffect, useState } from "react";
import { getCountryData } from "../api/postAPI";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layouts/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    (async () => {
      const res = await getCountryData();
      setCountries(res.data);
      setIsPending(false);
    })();
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
