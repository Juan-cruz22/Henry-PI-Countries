import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detailcountrie.module.css';

const Detailcountrie = () => {
    const { name } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/countries/${name}`)
            .then((response) => {
                const countryData = response.data[0];
    
                if (countryData && countryData.name) {
                    setCountry(countryData);
                } else {
                    console.error('Datos del país no encontrados:', response);
                    window.alert('No se pudo acceder a los datos del país');
                }
            })
            .catch((error) => {
                console.error("Error al obtener datos", error);
                if (error.response) {
                    console.error("Respuesta del servidor:", error.response.data);
                    console.error("Código de estado HTTP:", error.response.status);
                }
                window.alert('Error al obtener datos del país');
            });
        
        return () => setCountry({});
    }, [name]);

    return (
        <>
        <div className={style.containerdetail}>
            <h2>{country.cca3}</h2>
            <h2>País: {country?.name?.common}</h2>
            <h2>Continente: {country?.continents?.[0]}</h2>
            <h2>Capital: {country?.capital?.[0]}</h2>
            <h2>Subregión: {country?.subregion}</h2>
            <h2>Área: {country?.area}</h2>
            <h2>Populación: {country?.population}</h2>
        </div>
            <img className={style.flagdetail} src={country?.flags?.png} alt={`No se encuentra la imagen del país`} />
        </>
    );
};

export default Detailcountrie;