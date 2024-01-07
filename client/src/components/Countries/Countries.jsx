import React from "react";
import Card from "../Countrie/Countrie";

export default function Cards({ countries }) {
  return (
    <div>
      {countries.map((country, index) => (
        <Card
          key={index}
          name={country?.name?.common || 'Nombre no disponible'}
          continente={country?.region || 'Región no disponible'}
          flag={country?.flags?.png || 'Bandera no disponible'}
        />
      ))}
    </div>
  );
}