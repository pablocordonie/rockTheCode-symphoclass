import './field.css';
import createNewInput from '../Input/input';

const createNewField = (className, label, labelText, inputType = 'text') => `
    <li class="${className}">
        <label for="${label}" class="${className}-label">${labelText}</label>
        ${createNewInput(className, inputType, label)}
    </li>
`;

export default createNewField;