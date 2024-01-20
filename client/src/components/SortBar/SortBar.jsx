import React from 'react';
import style from './SortBar.module.css';

const SortBar = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    onSortChange(selectedSort);
  };

  return (
    <div className={style.container}>
      <label htmlFor="sort">Orden:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="nameAsc">nombre A-Z</option>
        <option value="nameDesc">nombre Z-A</option>
      </select>
    </div>
  );
};

export default SortBar;