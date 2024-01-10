const validation = (data) => {
    let errors = {};

    if (!data.nombre) {
        errors.nombre1 = 'Campo obligatorio';
    } else if (data.nombre.length > 20) {
        errors.nombre2 = 'Nombre muy largo';
    }

    if (!data.dificultad) {
        errors.dificultad1 = 'Campo obligatorio';
    } else if (isNaN(data.dificultad) || data.dificultad < 1 || data.dificultad > 5) {
        errors.dificultad2 = 'Debe ser un numero entre 1 y 5';
    }

    if (!data.duracion) {
        errors.duracion1 = 'Campo obligatorio';
    }

    if (!data.temporada) {
        errors.temporada1 = 'Campo obligatorio';
    } else if (!["invierno", "verano", "otoño", "primavera"].includes(data.temporada)) {
        errors.temporada2 = 'Elegir una o mas temporadas';
    }

    if (!data.seleccPaises) {
        errors.seleccPaises1 = 'Seleccionar al menos un país';
    }

    return errors;
};

export default validation;