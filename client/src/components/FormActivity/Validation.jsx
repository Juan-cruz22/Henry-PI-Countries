const validation = (data) => {
  let errors = {};

  if (!data.name) {
    errors.nombre1 = 'Campo obligatorio';
  } else if (data.name.length > 20) {
    errors.nombre2 = 'Nombre muy largo';
  }

  if (!data.difficulty) {
    errors.dificultad1 = 'Campo obligatorio';
  } else if (isNaN(data.difficulty) || data.difficulty < 1 || data.difficulty > 5) {
    errors.dificultad2 = 'Debe ser un numero entre 1 y 5';
  }

  if (!data.duration) {
    errors.duracion1 = 'Campo obligatorio';
  }

  if (!data.season) {
    errors.temporada1 = 'Campo obligatorio';
  } else if (!["invierno", "verano", "otoño", "primavera"].includes(data.season)) {
    errors.temporada2 = 'Elegir una o mas temporadas';
  }

  if (!data.countries || data.countries.length === 0) {
    errors.seleccPaises1 = 'Seleccionar al menos un país';
  }

  return errors;
};

export default validation;