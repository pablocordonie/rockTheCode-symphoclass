import './uploadImage.css';
import createNewButton from '../../Button/button';
import createNewImage from '../../Image/image';
import createNewInput from '../../Input/input';

const createUploadImageField = (className, fieldName, fieldTitle) => {
    const newField = document.createElement('li');
    newField.className = `${className}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${fieldName}`);
    label.className = `${className}-label`;
    label.textContent = `${fieldTitle}`;
    newField.appendChild(label);

    const uploadButton = createNewButton(`${className}-button`, 'Subir archivo', 'file');
    newField.appendChild(uploadButton);

    const fileInput = createNewInput(`${className}-input`, '', fieldName, 'file');
    fileInput.setAttribute('accept', 'image/*');
    newField.appendChild(fileInput);

    const uploadImg = createNewImage(`${className}-preview_img`, '', 'Preview image');
    newField.appendChild(uploadImg);

    return newField;
};

export default createUploadImageField;