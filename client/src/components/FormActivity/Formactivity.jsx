import React, { useState, useEffect } from "react";
import axios from "axios";
import validation from "./Validation";

const Form = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/activities")
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error("Error al obtener las actividades:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "countries") {
      setActivity((prevActivity) => ({
        ...prevActivity,
        [name]: value.split(",").map(country => country.trim()),
      }));
    } else {
      setActivity((prevActivity) => ({
        ...prevActivity,
        [name]: value,
      }));
    }

  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  const validationErrors = validation(activity);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
console.log("Datos a enviar:", activity);
await axios.post("http://localhost:3001/activities", activity);

  const response = await axios.get("http://localhost:3001/activities");
      setActivities(response.data);

      console.log("Formulario enviado con éxito!");
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre de la actividad:</label>
          <input
            id="name"
            name="name"
            value={activity.name}
            onChange={handleChange}
          />
          {errors.nombre1 && <p>{errors.nombre1}</p>}
          {errors.nombre2 && <p>{errors.nombre2}</p>}
        </div>
        <div>
          <label htmlFor="difficulty">Nivel de dificultad:</label>
          <input
            id="difficulty"
            name="difficulty"
            value={activity.difficulty}
            onChange={handleChange}
          />
          {errors.dificultad1 && <p>{errors.dificultad1}</p>}
          {errors.dificultad2 && <p>{errors.dificultad2}</p>}
        </div>
        <div>
          <label htmlFor="duration">Duracion:</label>
          <input
            id="duration"
            name="duration"
            value={activity.duration}
            onChange={handleChange}
          />
          {errors.duracion1 && <p>{errors.duracion1}</p>}
        </div>
        <div>
          <label htmlFor="season">Temporada:</label>
          <input
            id="season"
            name="season"
            value={activity.season}
            onChange={handleChange}
          />
          {errors.temporada1 && <p>{errors.temporada1}</p>}
          {errors.temporada2 && <p>{errors.temporada2}</p>}
        </div>
        <div>
          <label htmlFor="countries">Seleccionar países:</label>
          <input
            id="countries"
            name="countries"
            value={activity.countries.join(", ")}
            onChange={handleChange}
          />
          {errors.seleccPaises1 && <p>{errors.seleccPaises1}</p>}
        </div>
        <button type="submit">CREAR ACTIVIDAD</button>
      </form>
    </div>
  );
};

export default Form;