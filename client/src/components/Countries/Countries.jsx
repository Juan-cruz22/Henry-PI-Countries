import React from "react";
import Card from "../Countrie/Countrie";
import style from "./countries.module.css";

export default function Cards({
  countries,
  totalCountries,
  countriesPorPage,
  pagina,
}) {

  const paginas = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPorPage); i++) {
    paginas.push(i);
  }

  return (
    <div className={style.container}>
      {countries.map((country, index) => (
        <Card
          key={index}
          name={country?.name?.common || "Nombre no disponible"}
          continente={country?.continents || "Región no disponible"}
          flag={country?.flags?.png || "Bandera no disponible"}
        />
      ))}
      <div className={style.paginas}>
        {paginas.map((number) => (
          <button key={number} onClick={() => pagina(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}