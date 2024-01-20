import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtercontinents } from '../../redux/actions';
import style from './SortBar.module.css';

export default function Filtrosbar({ onFilterChange }) {
  const dispatch = useDispatch();
  const selectedContinent = useSelector((state) => state.continents);

  const handleFilterContinent = (event) => {
    const selectedContinent = event.target.value;
    dispatch(filtercontinents(selectedContinent));
    onFilterChange(selectedContinent);
  };

  return (
    <div className={style.container}>
    <label className={style.label}>Filtrar por Region:</label>
      <select className={style.select} onChange={handleFilterContinent} value={selectedContinent}>
        <option value="All">All</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
}