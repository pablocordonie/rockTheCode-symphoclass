const moment = require('moment');

const customDateValidation = (value, helpers) => {
    const formats = ['DD-MM-YYYY', 'DD/MM/YYYY'];
    const isValid = formats.some(format => moment(value, format, true).isValid());

    if (!isValid) {
        return helpers.message('the date must be valid and with the next formats: DD-MM-YYYY or DD/MM/YYYY');
    }

    const date = moment(value, formats, true);
    const now = moment().startOf('day');

    if (!date.isAfter(now)) {
        return helpers.message('the date must be after the current date');
    }

    return value;
};

module.exports = { customDateValidation };