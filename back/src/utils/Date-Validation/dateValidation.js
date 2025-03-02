const moment = require('moment');

const customDateValidation = (value, helpers) => {
    const formats = ['DD-MM-YYYY', 'DD/MM/YYYY'];
    const date = moment(value, formats, true);

    // Validar si el formato es correcto y la fecha es válida
    if (!date.isValid()) {
        return helpers.message('Invalid date format. Use DD-MM-YYYY or DD/MM/YYYY.');
    }

    // Extraer día, mes y año como números dividiendo la fecha en partes
    const dateParts = value.split(/[-/]/);
    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]);
    const year = Number(dateParts[2]);

    // Verificar que la fecha realmente existe (por ejemplo, evita 30/02/2024 ó 31/04/2023)
    const jsDate = new Date(year, month - 1, day);
    const isRealDate = (jsDate.getFullYear() === year && jsDate.getMonth() + 1 === month && jsDate.getDate() === day);

    if (!isRealDate) {
        return helpers.message(`Invalid date: This date doesn't exist.`);
    }

    return jsDate;
};



module.exports = { customDateValidation };