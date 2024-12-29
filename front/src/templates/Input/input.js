import './input.css';

const createNewInput = (className, fieldName, inputType = 'text', placeholderText = '') => {
    const newInput = document.createElement('input');
    newInput.type = `${inputType}`;

    if (fieldName !== '') {
        newInput.setAttribute('id', `${fieldName}`);
    }

    newInput.className = `${className}-input`;

    if (placeholderText !== '') {
        newInput.setAttribute('placeholder', `${placeholderText}`);
    }

    return newInput;
};

export default createNewInput;