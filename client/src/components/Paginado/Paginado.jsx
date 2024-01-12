import React from "react";
import style from "./Paginado.module.css";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalCards / cardsPerPage) }, (_, index) => index + 1);

  return (
    <div className={style.pagination}>
      {pageNumbers.map((number) => (
        <button className={style.button} key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;