const createNewInput = (className, inputType = 'text') => {
    const input = document.createElement('input');
    input.className = `${className}`;
    input.type = `${inputType}`;
    return input;
};

export default createNewInput;