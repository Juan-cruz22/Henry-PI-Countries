import React from "react";
import style from "./countrie.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className={style.container}>
      <Link to={`/detail/${props.name}`}>
      <h2 className={style.name}>{props.name}</h2>
        <img src={props.flag} className={style.flag} alt={`Flag of ${props.name}`} />
        <h2 className={style.continente}>{props.continente}</h2>
      </Link>
    </div>
  );
}

export default Card;