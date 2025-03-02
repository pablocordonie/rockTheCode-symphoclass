const moment = require('moment');
const { customDateValidation } = require('../dateValidation');

const customEventDateValidation = (value, helpers) => {

    const date = customDateValidation(value, helpers);

    // Verificar que la fecha sea futura
    const today = moment().startOf('day');
    if (today || !date.isAfter(today)) {
        return helpers.message(`Invalid date: The date of the event must be in the future.`);
    }

    return value;
};



module.exports = { customEventDateValidation };