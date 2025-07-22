const customBirthdateValidation = (value, helpers) => {
    const legalAge = 18;

    // Extraer día, mes y año como números dividiendo la fecha en partes
    const dateParts = value.split(/[-/]/);

    // Introducir las partes en un objeto de fecha
    const [year, month, day] = dateParts.map(datePart => Number(datePart));

    // Verificar que el mes y el día estén en tiempo pasado (dependiendo del mes y del año) así como la cantidad de días del mes correspondiente
    const daysInMonth = new Date(year, month, 0).getDate(); // Nº de días del mes de la fecha

    const isInvalidDay = (isNaN(day) || day < 1 || day > daysInMonth);
    const isInvalidMonth = (isNaN(month) || month < 1 || month > 12);
    const isInvalidYear = (isNaN(year) || year < 1900 || year >= new Date().getFullYear());

    if (isInvalidDay || isInvalidMonth || isInvalidYear) {
        // Devolver un mensaje de error si la fecha no es válida
        return helpers.message('La fecha no es válida, compruébela y pruebe a insertarla de nuevo');
    }

    // Verificar que la fecha de nacimiento es correcta para el registro del usuario
    const currentYear = new Date().getFullYear();
    if (currentYear - year < legalAge) {
        // Devolver un mensaje de error si la fecha de nacimiento del usuario no es válida
        return helpers.message(`La fecha de nacimiento del usuario no es válida, el usuario debe ser mayor de edad`);
    }

    // Retornar el valor original después de pasar la validación
    return value;
};

module.exports = { customBirthdateValidation };