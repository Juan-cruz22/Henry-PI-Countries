import React from "react";
import { Link } from "react-router-dom";

export default function Landingpage (){
    return (
        <div>
            <Link to={'/home'}>
            <button>INICIAR</button>
            </Link>
        </div>
    )
}