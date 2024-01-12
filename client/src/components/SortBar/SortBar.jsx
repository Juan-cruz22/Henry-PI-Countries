import React from 'react';
import style from './SortBar.module.css';

const SortBar = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    onSortChange(selectedSort);
  };

  return (
    <div className={style.container}>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="nameAsc">Name A-Z</option>
        <option value="nameDesc">Name Z-A</option>
      </select>
    </div>
  );
};

export default SortBar;