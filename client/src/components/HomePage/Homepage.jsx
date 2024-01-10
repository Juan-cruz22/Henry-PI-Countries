import React, { useState } from "react";
import Cards from "../Countries/Countries";
import Searchbar from "../SearchBar/Searchbar";
import style from "./Homepage.module.css";

const Homepage = () => {
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  const addSearchedCountry = (country) => {
    setSearchedCountries((prevCountries) => [country, ...prevCountries]);
  };

  const removeCountry = (index) => {
    setSearchedCountries((prevCountries) =>
      prevCountries.filter((_, i) => i !== index)
    );
  };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = searchedCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Searchbar onSearch={addSearchedCountry} />
      <Cards
        countries={currentCountries}
        onRemove={removeCountry}
        totalCountries={searchedCountries.length}
        countriesPerPage={countriesPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Homepage;