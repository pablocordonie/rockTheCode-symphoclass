const customEventDateTimeValidation = (value, helpers) => {
    // Separar fecha y hora
    const parts = value.split(' ');
    if (parts.length !== 2) {
        return helpers.message('Invalid format: Use DD-MM-YYYY HH:mm or DD/MM/YYYY HH:mm.');
    }

    const [datePart, timePart] = parts;
    const separator = datePart.includes('-') ? '-' : datePart.includes('/') ? '/' : null;

    if (!separator) {
        return helpers.message('Invalid format: Use "-" or "/" as date separator.');
    }

    const dateParts = datePart.split(separator);
    const timeParts = timePart.split(':');

    if (dateParts.length !== 3 || timeParts.length !== 2) {
        return helpers.message('Invalid format: The date or time is incorrectly structured.');
    }

    const [day, month, year] = dateParts.map(datePart => Number(datePart));
    const [hour, minutes] = timeParts.map(timePart => Number(timePart));

    const eventDate = new Date(year, month - 1, day, hour + 2, minutes);
    eventDate.setSeconds(0, 0);

    const today = new Date();
    today.setHours(1, 0, 0, 0);

    // Verificar que el mes y el día sean válidos en el pasado (dependiendo del mes y del año) así como la cantidad de días del mes correspondiente
    const daysInMonth = new Date(year, month, 0).getDate(); // Nº de días del mes de la fecha

    const isInvalidDay = (isNaN(day) || day < 1 || day > daysInMonth);
    const isInvalidMonth = (isNaN(month) || month < 1 || month > 12);
    const isInvalidYear = (isNaN(year) || year < 1900 || eventDate <= today);

    if (isInvalidDay || isInvalidMonth || isInvalidYear) {
        return helpers.message('Invalid date.');
    }

    return value;
};

module.exports = { customEventDateTimeValidation };