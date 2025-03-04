const createDateObj = (value) => {
    // Extraer día, mes y año como números dividiendo la fecha en partes
    const dateParts = value.split(/[-/]/);

    // Introducir las partes en un objeto de fecha
    const [day, month, year] = dateParts.map(datePart => Number(datePart));
    const date = {
        day,
        month,
        year
    }

    return date;
};

module.exports = { createDateObj };