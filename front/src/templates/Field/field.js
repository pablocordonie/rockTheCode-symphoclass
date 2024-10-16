import './field.css';
import createNewInput from '../Input/input';

const createNewField = (className, label, labelText, inputType = 'text') => `
    <div class="${className}">
        <label for="${label}" class="${className}-label">${labelText}</label>
        ${createNewInput(className, inputType, label)}
    </div>
`;

export default createNewField;