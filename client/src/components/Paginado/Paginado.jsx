import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({ cardsxpagina, totalCards, paginate }) => {
  const numeroPagina = Array.from({ length: Math.ceil(totalCards / cardsxpagina) }, (_, index) => index + 1);

  return (
    <div className={style.pagination}>
      {numeroPagina.map((number) => (
        <button className={style.button} key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Paginado;