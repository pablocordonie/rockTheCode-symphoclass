const isAnyUnfilledField = (body) => Object.values(body).some(value => !value.length);

module.exports = { isAnyUnfilledField };