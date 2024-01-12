import React, { useState, useEffect } from 'react';
import style from './homepage.module.css';
import Cards from '../Countries/Countries';
import Searchbar from '../SearchBar/Searchbar';
import Pagination from '../Paginado/Paginado';
import Filtrosbar from '../SortBar/Filtrosbar';
import PopulationSortBar from  '../SortBar/PopulationSortBar';
import SortBar from '../SortBar/SortBar';

const Homepage = ({ countries, onSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedSort, setSelectedSort] = useState('nameAsc');
  const [selectedPopulationSort, setSelectedPopulationSort] = useState('asc'); // Nuevo estado para la ordenación por población
  const cardsPerPage = 10;

  useEffect(() => {
    // Filtrar y ordenar los países cuando cambia el continente seleccionado, la ordenación o la ordenación por población
    let sortedCountries = [...countries];

    if (selectedContinent !== 'All') {
      sortedCountries = sortedCountries.filter((country) =>
        country.continents.includes(selectedContinent)
      );
    }

    if (selectedSort === 'nameAsc') {
      sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (selectedSort === 'nameDesc') {
      sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }

    if (selectedPopulationSort === 'asc') {
      sortedCountries.sort((a, b) => a.population - b.population);
    } else if (selectedPopulationSort === 'desc') {
      sortedCountries.sort((a, b) => b.population - a.population);
    }

    setFilteredCountries(sortedCountries);
    setCurrentPage(1); // Resetear la página actual al cambiar el continente, la ordenación o la ordenación por población
  }, [selectedContinent, selectedSort, selectedPopulationSort, countries]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCountries.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filteredContinent) => {
    setSelectedContinent(filteredContinent);
  };

  const handleSortChange = (selectedSort) => {
    setSelectedSort(selectedSort);
  };

  const handlePopulationSortChange = (selectedPopulationSort) => {
    setSelectedPopulationSort(selectedPopulationSort);
  };

  return (
    <>
      <Filtrosbar onFilterChange={handleFilterChange} />
      <SortBar onSortChange={handleSortChange}/>
      <PopulationSortBar onPopulationSortChange={handlePopulationSortChange} /> {/* Agrega la nueva barra de ordenación por población */}
      <Cards countries={currentCards} />
      <Pagination cardsPerPage={cardsPerPage} totalCards={filteredCountries.length} paginate={paginate} />
    </>
  );
};

export default Homepage;