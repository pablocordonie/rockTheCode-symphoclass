const duplicatesRemoverIntoArray = (array, newElement) => {
    array = array.filter(arrayElement => arrayElement.querySelector !== newElement.querySelector);

    array.push(newElement);
    return array;
};

export default duplicatesRemoverIntoArray;