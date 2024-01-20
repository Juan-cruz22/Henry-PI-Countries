import React, { useState, useEffect } from 'react';
import Cards from '../Countries/Countries';
import Searchbar from '../SearchBar/Searchbar';
import Pagination from '../Paginado/Paginado';
import Filtrosbar from '../SortBar/Filtrosbar';
import PopulationSortBar from  '../SortBar/PopulationSortBar';
import SortBar from '../SortBar/SortBar';

const Homepage = ({ countries, onSearch }) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [paisFiltrado, setPaisFiltrado] = useState(countries);
  const [continenteSeleccionado, setContinenteSeleccionado] = useState('All');
  const [ordenSeleccionado, setOrdenSeleccionado] = useState('nameAsc');
  const [ordenPoblacion, setOrdenPoblacion] = useState('asc'); 
  const cardsxpagina = 10;


  useEffect(() => {
    let ordenCountries = [...countries];

    if (continenteSeleccionado !== 'All') {
      ordenCountries = ordenCountries.filter((country) =>
        country.continents.includes(continenteSeleccionado)
      );
    }

    if (ordenSeleccionado === 'nameAsc') {
      ordenCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (ordenSeleccionado === 'nameDesc') {
      ordenCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }

    if (ordenPoblacion === 'asc') {
      ordenCountries.sort((a, b) => a.population - b.population);
    } else if (ordenPoblacion === 'desc') {
      ordenCountries.sort((a, b) => b.population - a.population);
    }

    setPaisFiltrado(ordenCountries);
    setPaginaActual(1);
  }, [continenteSeleccionado, ordenSeleccionado, ordenPoblacion, countries]);

  const indexOfUltimaCard = paginaActual * cardsxpagina;
  const indexOfPrimeraCard = indexOfUltimaCard - cardsxpagina;
  const cardsActuales = paisFiltrado.slice(indexOfPrimeraCard, indexOfUltimaCard);

  const paginate = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  const handleFilterChange = (continenteSeleccionado) => {
    setContinenteSeleccionado(continenteSeleccionado);
  };

  const handleSortChange = (ordenSeleccionado) => {
    setOrdenSeleccionado(ordenSeleccionado);
  };

  const handlePopulationSortChange = (ordenPoblacion) => {
    setOrdenPoblacion(ordenPoblacion);
  };

  return (
    <>
      <Filtrosbar onFilterChange={handleFilterChange} />
      <SortBar onSortChange={handleSortChange}/>
      <PopulationSortBar onPopulationSortChange={handlePopulationSortChange} />
      <Cards countries={cardsActuales} />
      <Pagination cardsxpagina={cardsxpagina} totalCards={paisFiltrado.length} paginate={paginate} />
    </>
  );
};

export default Homepage;