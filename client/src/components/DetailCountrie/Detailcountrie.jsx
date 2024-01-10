
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detailcountrie.module.css';

const Detailcountrie = () => {

    const { name } = useParams()
    const [country, setCountry] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/countries/${name}`).then((response) => {
            const countryData = response.data[0]; // La respuesta parece ser un array, tomamos el primer elemento
            if (countryData.name) {
                setCountry(countryData);
            } else {
                window.alert('No se pudo acceder al país');
            }
        }).catch(error => {
            console.error("Error al obtener datos", error);
            window.alert('Error al obtener datos del país');
        });
        return () => setCountry({});
     }, [name]);

    return (
        <div className={style.container}>
            <h2>{country.cca3}</h2>
            <h2>País: {country?.name?.common}</h2>
            <h2>Continente: {country?.continents?.[0]}</h2>
            <h2>Capital: {country?.capital?.[0]}</h2>
            <h2>Subregion: {country?.subregion}</h2>
            <h2>Area: {country?.area}</h2>
            <img src={country?.flags?.png} alt={`No se encuentra la imagen del país`} />
        </div>
    );
}

export default Detailcountrie;