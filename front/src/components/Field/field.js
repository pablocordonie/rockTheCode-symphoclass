import './field.css';
import createNewInput from '../Input/input';

const createNewField = (field) => {
    const { className, inputType, name, placeholderText, title } = field;

    const newField = document.createElement('li');
    newField.className = `${className}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${name}`);
    label.className = `${className}-label`;
    label.textContent = `${title}`;

    const input = createNewInput(`${className}-input`, name, inputType, placeholderText);

    newField.appendChild(label);
    newField.appendChild(input);
    return newField;
};

export default createNewField;