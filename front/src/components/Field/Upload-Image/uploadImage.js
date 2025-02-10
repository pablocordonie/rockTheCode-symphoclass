import './uploadImage.css';
import createNewButton from '../../Button/button';
import createNewImage from '../../Image/image';
import createNewInput from '../../Input/input';

const createUploadImageField = (field) => {
    const { className, inputType, name, title } = field;

    const uploadImageField = document.createElement('li');
    uploadImageField.className = `${className}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${name}`);
    label.className = `${className}-label`;
    label.textContent = `${title}`;
    uploadImageField.appendChild(label);

    const uploadButton = createNewButton(`${className}-button`, 'Subir archivo', inputType);
    uploadImageField.appendChild(uploadButton);

    const fileInput = createNewInput(`${className}-input`, name, inputType);
    fileInput.setAttribute('accept', 'image/*');
    uploadImageField.appendChild(fileInput);

    const uploadImg = createNewImage(`${className}-preview_img`, '', 'Preview image');
    uploadImageField.appendChild(uploadImg);

    return uploadImageField;
};

export default createUploadImageField;