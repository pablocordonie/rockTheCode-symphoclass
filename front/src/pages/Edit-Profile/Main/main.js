import createEditProfileForm from '../../../components/Form/Edit-Profile/editProfile';
import createEditProfileFormContent from '../../../components/List/Edit-Profile/editProfile';
import createEditProfileFormField from '../../../components/Item/Edit-Profile/editProfile';
import createEditProfileFormImageBtn from '../../../components/Button/Edit-Profile/editProfile';
import createEditProfileFormInput from '../../../components/Input/Edit-Profile/editProfile';
import createEditProfileFormLabel from '../../../components/Label/Edit-Profile/editProfile';
import { createFieldData } from '../../../config/config';
import createPreviewImage from '../../../components/Image/Preview/preview';
import createSubmitBtn from '../../../components/Button/Submit/submit';
import createSubmitContent from '../../../components/Div/Submit/submit';

const createEditProfileMainContent = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const editProfileFormFields = [];

    const editProfileForm = createEditProfileForm(`${mainClassName}-${currentPage}-form`);

    const editProfileFormContent = createEditProfileFormContent(`${editProfileForm.className}-content`);
    editProfileForm.appendChild(editProfileFormContent);

    // TO-DO: Dar opción para poder cambiar la imagen del perfil

    const userNameField = createFieldData(`${editProfileForm.className}-username`, 'username', 'username', 'Nombre de Usuario');
    editProfileFormFields.push(userNameField);

    const fullNameField = createFieldData(`${editProfileForm.className}-fullname`, 'fullname', 'fullname', 'Nombre Completo');
    editProfileFormFields.push(fullNameField);

    const emailField = createFieldData(`${editProfileForm.className}-email`, 'email', 'email', 'Email');
    editProfileFormFields.push(emailField);

    const birthdateField = createFieldData(`${editProfileForm.className}-birthdate`, 'birthdate', 'birthdate', 'Fecha de Nacimiento', 'date');
    editProfileFormFields.push(birthdateField);

    const imgField = createFieldData(`${editProfileForm.className}-img`, 'image', 'image', 'Imagen', 'file');
    editProfileFormFields.push(imgField);

    const passwordField = createFieldData(`${editProfileForm.className}-password`, 'password', 'password', 'Contraseña Actual', 'password');
    editProfileFormFields.push(passwordField);

    const newPasswordField = createFieldData(`${editProfileForm.className}-new-password`, 'new-password', 'new-password', 'Nueva Contraseña', 'password');
    editProfileFormFields.push(newPasswordField);

    editProfileFormFields.forEach(field => {
        const editProfileFormField = createEditProfileFormField(`${field.className}-field`);
        editProfileFormContent.appendChild(editProfileFormField);

        const editProfileFormLabel = createEditProfileFormLabel(`${editProfileFormField.className}-label`, field.name, field.title);
        editProfileFormField.appendChild(editProfileFormLabel);

        const editProfileFormInput = createEditProfileFormInput(`${editProfileFormField.className}-input`, field.id, field.name, field.placeholderText, field.inputType);
        editProfileFormField.appendChild(editProfileFormInput);

        if (field.name === 'image') {
            editProfileFormInput.setAttribute('accept', 'image/*');

            const editProfileFormPreviewImage = createPreviewImage(`${editProfileFormField.className}-preview`, '#', 'Preview image');
            editProfileFormField.appendChild(editProfileFormPreviewImage);

            const editProfileFormImageBtn = createEditProfileFormImageBtn(`${editProfileFormField.className}-upload-btn`, 'Seleccionar');
            editProfileFormField.appendChild(editProfileFormImageBtn);
        }
    });

    const editProfileSubmitContent = createSubmitContent(`${editProfileForm.className}-submit`);
    editProfileForm.appendChild(editProfileSubmitContent);

    const editProfileSubmitBtn = createSubmitBtn(`${editProfileSubmitContent.className}-btn`, 'Actualizar');
    editProfileSubmitContent.appendChild(editProfileSubmitBtn);

    // TO-DO: Dar opción para poder eliminar la cuenta del usuario y volver a la página de login

    return editProfileForm;
};

export default createEditProfileMainContent;