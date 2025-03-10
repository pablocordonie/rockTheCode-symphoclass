const { createDateObj } = require('../date');

const customBirthdateValidation = (value, helpers) => {
    const legalAge = 18;

    const date = createDateObj(value);

    const { day, month, year } = date;

    // Verificar que el mes y el día sean válidos en el pasado (dependiendo del mes y del año) así como la cantidad de días del mes correspondiente
    const daysInMonth = new Date(year, month, 0).getDate(); // Nº de días del mes de la fecha

    const isInvalidDay = (isNaN(day) || day < 1 || day > daysInMonth);
    const isInvalidMonth = (isNaN(month) || month < 1 || month > 12);
    const isInvalidYear = (isNaN(year) || year < 1900 || year >= new Date().getFullYear());

    if (isInvalidDay || isInvalidMonth || isInvalidYear) {
        return helpers.message('Invalid date.');
    }

    // Verificar que la fecha de nacimiento es correcta para el registro del usuario
    const currentYear = new Date().getFullYear();
    if (currentYear - year < legalAge) {
        return helpers.message(`Invalid date: The user hasn't reached the required age to register.`);
    }

    return value;
};

module.exports = { customBirthdateValidation };