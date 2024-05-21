const isAnyModifiedField = (body, data) => Object.keys(body).some((key) => body[key] !== data[key]);

module.exports = { isAnyModifiedField };