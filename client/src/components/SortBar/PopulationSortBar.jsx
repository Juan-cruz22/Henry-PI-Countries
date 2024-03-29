import React from 'react';
import style from './SortBar.module.css';

const PopulationSortBar = ({ onPopulationSortChange }) => {
  const handlePopulationSortChange = (event) => {
    const selectedPopulationSort = event.target.value;
    onPopulationSortChange(selectedPopulationSort);
  };

  return (
    <div className={style.container}>
      <label htmlFor="populationSort">Ordenar por Poblacion:</label>
      <select id="populationSort" onChange={handlePopulationSortChange}>
        <option value="default">Default</option>
        <option value="asc">Menor poblacion</option>
        <option value="desc">Mayor poblacion</option>
      </select>
    </div>
  );
};

export default PopulationSortBar;