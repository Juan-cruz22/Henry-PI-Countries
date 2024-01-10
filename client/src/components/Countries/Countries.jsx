import React from "react";
import Card from "../Countrie/Countrie";
import style from "./countries.module.css";

export default function Cards({
  countries,
  onRemove,
  totalCountries,
  countriesPerPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.container}>
      {countries.map((country, index) => (
        <Card
          key={index}
          name={country?.name?.common || "Nombre no disponible"}
          continente={country?.continents || "Región no disponible"}
          flag={country?.flags?.png || "Bandera no disponible"}
          onRemove={() => onRemove(index)}
        />
      ))}
      <div className={style.pagination}>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}