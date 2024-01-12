import React, { useState } from "react";
import style from "./Searchbar.module.css";
import axios from "axios";

export default function Searchbar({ onSearch }) {
  const [name, setName] = useState('');

  const handleChange = async (event) => {
    const newName = event.target.value;
    setName(newName);

    try {
      if (typeof onSearch === 'function') {
        // Solo realiza la búsqueda si el nombre no está vacío
        if (newName.trim() !== '') {
          onSearch(newName);
        }
      } else {
        console.error('onSearch no es una función');
      }
    } catch (error) {
      console.error('Error al obtener los países:', error);
    }
  }

  return (
    <div className={style.container}>
      <input value={name} id="inputSearch" type="search" onChange={handleChange} />
    </div>
  );
}