import './field.css';
import createNewInput from '../Input/input';

const createNewField = (className, fieldName, fieldTitle, inputType = 'text', placeholderText = '') => {
    const newField = document.createElement('li');
    newField.className = `${className}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${fieldName}`);
    label.className = `${className}-label`;
    label.textContent = `${fieldTitle}`;

    const input = createNewInput(className, fieldName, inputType, placeholderText);

    newField.appendChild(label);
    newField.appendChild(input);
    return newField;
};

export default createNewField;