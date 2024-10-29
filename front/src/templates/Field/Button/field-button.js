import createButton from '../../Button/button';

const createNewFieldWithButton = (className, label, labelText) => `
    <div class="${className}">
        <label for="${label}" class="${className}-label">${labelText}</label>
        ${createButton(`${className}-button`, 'Subir archivo', label)}
    </div>
`;

export default createNewFieldWithButton;