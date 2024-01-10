import React, { useState } from "react";
import style from "./Searchbar.module.css";

export default function Searchbar({ onSearch: externalOnSearch }) {
  const [countryName, setCountryName] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/countries/${countryName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      externalOnSearch(data[0]); // Llama a la función de callback con el primer país del array
      setCountryName(""); // Limpia el campo de búsqueda después de agregar el país
    } catch (error) {
      console.error("Error al obtener datos", error);
    }
  };

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        value={countryName}
        id="inputSearch"
        type="search"
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}