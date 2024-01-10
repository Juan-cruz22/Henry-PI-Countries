import { useState } from "react";
import validation from "./Validation";
import style from "./Formactivity.module.css"

const Form = () => {
    const [activity, setActivity] = useState({
        nombre: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        seleccPaises: '',
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setErrors(validation({ ...activity, [event.target.name]: event.target.value }));
        setActivity({ ...activity, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.nombre}>
                    <label htmlFor="nombre">Nombre de la actividad:</label>
                    <input
                        id="nombre"
                        className={style.inputnombre}
                        value={activity.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre1 && <p>{errors.nombre1}</p>}
                    {errors.nombre2 && <p>{errors.nombre2}</p>}
                </div>
                <div className={style.dificultad}>
                    <label htmlFor="dificultad">Nivel de dificultad:</label>
                    <input
                        id="dificultad"
                        className={style.inputdificultad}
                        value={activity.dificultad}
                        onChange={handleChange}
                    />
                    {errors.dificultad1 && <p>{errors.dificultad1}</p>}
                    {errors.dificultad2 && <p>{errors.dificultad2}</p>}
                </div>
                <div className={style.duracion}>
                    <label htmlFor="dificultad">Duracion:</label>
                    <input
                        id="duracion"
                        className={style.inputduracion}
                        value={activity.duracion}
                        onChange={handleChange}
                    />
                    {errors.duracion1 && <p>{errors.duracion1}</p>}
                </div>
                <div className={style.temporada}>
                    <label htmlFor="temporada">Temporada:</label>
                    <input
                        id="temporada"
                        className={style.inputtemporada}
                        value={activity.temporada}
                        onChange={handleChange}
                    />
                    {errors.temporada1 && <p>{errors.temporada1}</p>}
                    {errors.temporada2 && <p>{errors.temporada2}</p>}
                </div>
                <div className={style.seleccPaises}>
                    <label htmlFor="seleccPaises">Seleccionar países:</label>
                    <input
                        id="seleccPaises"
                        className={style.inputseleccPaises}
                        value={activity.seleccPaises}
                        onChange={handleChange}
                    />
                    {errors.seleccPaises1 && <p>{errors.seleccPaises1}</p>}
                </div>
                <button className={style.CrearActividad} type="submit">CREAR ACTIVIDAD</button>
            </form>
        </div>
    );
};

export default Form;