import './field.css'

const createNewField = (className, label, labelText, inputType = 'text') => `
    <div class="${className}">
        <label for="${label}_input" class="${className}-label">${labelText}</label>
        <input id="${label}_input" class="${className}-input" type="${inputType}" />
    </div>
`;

export default createNewField;