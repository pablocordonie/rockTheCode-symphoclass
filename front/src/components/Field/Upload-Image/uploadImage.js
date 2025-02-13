import './uploadImage.css';
import createNewButton from '../../Button/button';
import createNewImage from '../../Image/image';
import createNewInput from '../../Input/input';
import createNewTagTemplate from '../../Tag/tag';

const createUploadImageField = (field) => {
    const { className, inputType, name, title } = field;

    const uploadImageField = createNewTagTemplate('li', className);

    const label = createNewTagTemplate('label', `${className}-label`, { for: name }, title);
    uploadImageField.appendChild(label);

    const uploadButton = createNewButton(`${className}-button`, 'Subir archivo');
    uploadImageField.appendChild(uploadButton);

    const fileInput = createNewInput(`${className}-input`, name, '', inputType);
    fileInput.setAttribute('accept', 'image/*');
    uploadImageField.appendChild(fileInput);

    const uploadImg = createNewImage(`${className}-preview_img`, '', 'Preview image');
    uploadImageField.appendChild(uploadImg);

    return uploadImageField;
};

export default createUploadImageField;