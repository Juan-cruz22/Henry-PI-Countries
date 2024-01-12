import React from "react";
import { Link } from "react-router-dom";
import style from "./Landingpage.module.css";

export default function Landingpage() {
    return (
        <>
        <h3>PI-HENRY</h3>
        <h1>COUNTRIES</h1>
        <div className={style.container}>
            <Link to={'/home'}>
                <button className={style.button}>INICIAR</button>
            </Link>
        </div>
        </>
    );
};