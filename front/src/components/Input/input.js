import './input.css';

const createNewInput = (className, id, inputType, placeholderText) => {
    const newInput = document.createElement('input');
    newInput.className = `${className}`;
    newInput.type = `${inputType}`;

    if (id !== '') {
        newInput.id = `${id}`;
    }

    if (placeholderText !== '') {
        newInput.setAttribute('placeholder', `${placeholderText}`);
    }

    return newInput;
};

export default createNewInput;