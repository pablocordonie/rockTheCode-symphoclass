import './editProfileForm.css';
import { appConfig } from '../../../config/config';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import generateFieldData from '../../../utils/Data/generateFieldData';
import generateList from '../../../utils/List/generateList';

const createEditProfileForm = (className, currentPage) => {
    const { mainClassName } = appConfig;

    const editProfileFormList = document.createElement('ul');
    editProfileFormList.className = `${className}`;

    const editProfileFormFields = [];

    /* TO-DO: Dar opción para poder cambiar la imagen del perfil */

    const userNameField = generateFieldData(`${mainClassName}-${currentPage}_form-username_field`, 'username', 'Nombre de Usuario');
    editProfileFormFields.push(userNameField);

    const fullNameField = generateFieldData(`${mainClassName}-${currentPage}_form-fullname_field`, 'fullname', 'Nombre Completo');
    editProfileFormFields.push(fullNameField);

    const emailField = generateFieldData(`${mainClassName}-${currentPage}_form-email_field`, 'email', 'Email');
    editProfileFormFields.push(emailField);

    const passwordField = generateFieldData(`${mainClassName}-${currentPage}_form-password_field`, 'password', 'Contraseña', 'password');
    editProfileFormFields.push(passwordField);

    const repeatPasswordField = generateFieldData(`${mainClassName}-${currentPage}_form-repeat_password_field`, 'compare-password', 'Repetir Contraseña', 'password');
    editProfileFormFields.push(repeatPasswordField);

    console.log(editProfileFormFields);
    generateList(editProfileFormList, editProfileFormFields, field => createNewField(field));

    /* Util => generateOptionsToClick.js */
    const submitProfileItem = document.createElement('li');
    submitProfileItem.className = `${mainClassName}-${currentPage}_form-${currentPage}_item`;

    const submitProfileButton = createNewButton(`${mainClassName}-${currentPage}_form-${currentPage}_button`, 'Modificar Perfil');
    submitProfileItem.appendChild(submitProfileButton);
    editProfileFormList.appendChild(submitProfileItem);

    /* TO-DO: Dar opción para poder eliminar la cuenta del usuario y volver a la página de login */

    return editProfileFormList;
};

export default createEditProfileForm;