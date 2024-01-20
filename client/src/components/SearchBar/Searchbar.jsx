import React, { useState } from "react";
import axios from "axios";
import style from "./Searchbar.module.css";
import { Link } from "react-router-dom";

export default function Searchbar({ onSearch }) {
  const [name, setName] = useState('');

  const handleChange = async (event) => {
    const newName = event.target.value;
    setName(newName);

    try {
      if (typeof onSearch === 'function') {
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
    <div className={style.containerbar}>
      <h4 className={style.titlebar}>countries</h4>
      <Link to={'/activities'}>
      <button className={style.buttonbar}>Crear actividad</button>
      </Link>
      <input className={style.inputbar} value={name} id="inputSearch" type="search" placeholder="Buscar país..." onChange={handleChange} />
    </div>
  );
}