import React from "react";
import style from "./countrie.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className={style.container}>
      <Link to={`/detail/${props.name}`}>
        <img src={props.flag} alt={`Flag of ${props.name}`} />
        <h2>name: {props.name}</h2>
        <h2>continente: {props.continente}</h2>
      </Link>
      <button onClick={props.onRemove}>Cerrar</button>
    </div>
  );
}

export default Card;