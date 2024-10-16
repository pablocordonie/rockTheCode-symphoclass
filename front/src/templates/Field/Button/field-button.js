import createTagTemplate from '../../Tag/tag';

const createNewFieldWithButton = (className, label, labelText) => `
    <div class="${className}">
        <label for="${label}" class="${className}-label">${labelText}</label>
        ${createTagTemplate('button', `${className}-button`, 'Subir archivo', label)}
    </div>
`;

export default createNewFieldWithButton;