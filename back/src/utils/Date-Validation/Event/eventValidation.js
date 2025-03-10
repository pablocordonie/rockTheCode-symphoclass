const { createDateObj } = require('../date');

const customEventDateValidation = (value, helpers) => {
    const date = createDateObj(value);

    const { day, month, year } = date;
    const eventDate = new Date(year, month - 1, day);
    eventDate.setHours(1, 0, 0, 0);
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

module.exports = { customEventDateValidation };