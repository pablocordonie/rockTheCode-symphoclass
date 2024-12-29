const duplicatesRemoverIntoArray = (array, newElement) => {
    if (!array || typeof array !== 'object') {
        throw new Error('El conjunto de HTMLElementsWithListeners procedentes de listeners activados actualmente no se ha encontrado en forma de array');
    } else {
        array = array.filter(arrayElement => arrayElement !== newElement);
    }

    array.push(newElement);
    return array;
};

export default duplicatesRemoverIntoArray;