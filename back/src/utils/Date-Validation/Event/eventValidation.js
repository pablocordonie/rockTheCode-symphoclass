const { createDateObj } = require('../date');

const customEventDateValidation = (value, helpers) => {
    const date = createDateObj(value);
    const { day, month, year } = date;

    // Verificar que el mes y el día sean válidos en el futuro (dependiendo del mes y del año) así como la cantidad de días del mes correspondiente
    const daysInMonth = new Date(year, month, 0).getDate(); // Nº de días del mes de la fecha

    const isUnrealDay = (isNaN(day) || day < 1 || day > daysInMonth);
    const isUnrealMonth = (isNaN(month) || month < 1 || month > 12);
    const isUnrealOrFarYear = (isNaN(year) || year < new Date().getFullYear() || year > new Date().getFullYear() + 2);

    if (isUnrealDay || isUnrealMonth || isUnrealOrFarYear) {
        return helpers.message(`Invalid date.`);
    }

    return value;
};

module.exports = { customEventDateValidation };