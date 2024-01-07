import React, { useState } from "react";
import Cards from "../Countries/Countries";
import Searchbar from "../SearchBar/Searchbar";

const Homepage = () => {
  const [searchedCountries, setSearchedCountries] = useState([]);

  const addSearchedCountry = (country) => {
    console.log("País agregado:", country);
    setSearchedCountries((prevCountries) => [country, ...prevCountries]);
  };

  return (
    <div>
      <Searchbar onSearch={addSearchedCountry} />
      <Cards countries={searchedCountries} />
    </div>
  );
};

export default Homepage;