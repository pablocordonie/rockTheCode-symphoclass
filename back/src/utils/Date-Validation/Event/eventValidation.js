const customEventDateTimeValidation = (value, helpers) => {
    // Separar fecha y hora
    const parts = value.split(' ');

    // Devolver un mensaje de error si el formato no es válido
    if (parts.length !== 2) {
        return helpers.message('El formato no es válido: Use DD-MM-YYYY HH:mm ó DD/MM/YYYY HH:mm');
    }

    // Asignar cada parte correspondiente a la fecha y a la hora
    const [datePart, timePart] = parts;

    // Identificar el dato separador de números en la fecha
    const separator = datePart.includes('-') ? '-' : datePart.includes('/') ? '/' : null;

    // Devolver un mensaje de error en caso de que no se encuentre ningún dato separador de números en la fecha
    if (!separator) {
        return helpers.message('El formato no es válido: Use "-" ó "/" como dato separador');
    }

    // Separar en 3 partes la fecha y en 2 partes la hora
    const dateParts = datePart.split(separator);
    const timeParts = timePart.split(':');

    // Devolver un mensaje de error si la estructura de la fecha o la hora es incorrecta
    if (dateParts.length !== 3 || timeParts.length !== 2) {
        return helpers.message('El formato no es válido: La estructura de la fecha o la hora es incorrecta');
    }

    // Asignar cada parte correspondiente al día, al mes y al año respectivamente así como a la hora y a los minutos en el caso de la hora temporal
    const [day, month, year] = dateParts.map(datePart => Number(datePart));
    const [hour, minutes] = timeParts.map(timePart => Number(timePart));

    // Crear un objeto de fecha para el evento
    const eventDate = new Date(year, month - 1, day, hour + 2, minutes);
    eventDate.setSeconds(0, 0);

    // Crear un objeto de fecha para el día actual
    const today = new Date();
    today.setHours(1, 0, 0, 0);

    // Verificar que el mes y el día estén en tiempo futuro (dependiendo del mes y del año) así como la cantidad de días del mes correspondiente
    const daysInMonth = new Date(year, month, 0).getDate(); // Nº de días del mes de la fecha

    const isInvalidDay = (isNaN(day) || day < 1 || day > daysInMonth);
    const isInvalidMonth = (isNaN(month) || month < 1 || month > 12);
    const isInvalidYear = (isNaN(year) || year < 1900 || eventDate <= today);

    // Devolver un mensaje de error en caso de que la fecha no sea válida
    if (isInvalidDay || isInvalidMonth || isInvalidYear) {
        return helpers.message('La fecha no es válida, compruébela y pruebe a insertarla de nuevo');
    }

    // Retornar el valor original después de pasar la validación
    return value;
};

module.exports = { customEventDateTimeValidation };