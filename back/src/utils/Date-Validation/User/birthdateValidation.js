const moment = require('moment');
const { customDateValidation } = require('../dateValidation');

const customBirthdateValidation = (value, helpers) => {
    const date = customDateValidation(value, helpers);
    const legalAge = 18;

    // Verificar que la fecha de nacimiento es correcta para el registro del usuario
    if (date.getFullYear() - date.year < legalAge) {
        return helpers.message(`Invalid date: The user hasn't reached the required age to register.`);
    }

    // Verificar que la fecha no pueda ser futura
    const today = moment().startOf('day');
    if (date.isAfter(today)) {
        return helpers.message(`Invalid date: The birthdate must be in the past.`);
    }

    return value;
};



module.exports = { customBirthdateValidation };