import React from 'react';
import style from './SortBar.module.css';

const PopulationSortBar = ({ onPopulationSortChange }) => {
  const handlePopulationSortChange = (event) => {
    const selectedPopulationSort = event.target.value;
    onPopulationSortChange(selectedPopulationSort);
  };

  return (
    <div className={style.container}>
      <label htmlFor="populationSort">Sort by Population:</label>
      <select id="populationSort" onChange={handlePopulationSortChange}>
        <option value="default">Default</option>
        <option value="asc">Lowest to Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default PopulationSortBar;