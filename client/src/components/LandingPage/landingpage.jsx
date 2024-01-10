import React from "react";
import { Link } from "react-router-dom";
import style from "./Landingpage.module.css";

export default function Landingpage() {
    return (
        <>
        <h1>C O U N T R Y P E D I A</h1>
        <div className={style.container}>
            <Link to={'/home'}>
                <button className={style.button}>INICIAR</button>
            </Link>
        </div>
        </>
    );
};