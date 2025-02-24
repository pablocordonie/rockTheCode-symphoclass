const duplicatesRemoverIntoArray = (array, newElement) => {
    if (!array || typeof array !== 'object') {
        throw new Error('El conjunto de HTMLElementsWithListeners procedentes de listeners activados actualmente no se ha encontrado en forma de array');
    }

    const index = array.findIndex(arrayElement => arrayElement.querySelector === newElement.querySelector && arrayElement.type === newElement.type);
    if (index !== -1) {
        array.splice(index, 1);
    }

    array.push(newElement);
    return array;
};

export default duplicatesRemoverIntoArray;