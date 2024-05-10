const isAnyModifiedField = (body, event) => Object.keys(body).some((key) => body[key] !== event[key]);

module.exports = { isAnyModifiedField };