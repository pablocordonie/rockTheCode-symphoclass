import createNewButton from '../../Button/button';

const createNewFieldWithButton = (className, fieldName, fieldTitle) => {
    const newField = document.createElement('li');
    newField.className = `${className}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${fieldName}`);
    label.className = `${className}-label`;
    label.textContent = `${fieldTitle}`;
    newField.appendChild(label);

    const uploadImageButton = createNewButton(`${className}-button`, 'Subir archivo', fieldName);
    newField.appendChild(uploadImageButton);

    return newField;
};

export default createNewFieldWithButton;