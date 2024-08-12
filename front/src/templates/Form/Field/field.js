import './field.css'

const createNewField = (className, labelText, inputType = 'text') => `
    <div class="${className}">
        <label class="${className}-label">${labelText}</label>
        <input class="${className}-input" type=${inputType} />
    </div>
`;

export default createNewField;