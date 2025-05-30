import './editProfileForm.css';
import { createFieldData } from '../../../config/config';
import createSubmitBtn from '../../Button/Submit/submit';
import createNewTagTemplate from '../../Tag/tag';

const createEditProfileForm = (className, appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const editProfileFormList = createNewTagTemplate('ul', className);

    const editProfileFormFields = [];

    /* TO-DO: Dar opción para poder cambiar la imagen del perfil */

    const userNameField = createFieldData(`${mainClassName}-${currentPage}_form-username_field`, 'username', 'Nombre de Usuario');
    editProfileFormFields.push(userNameField);

    const fullNameField = createFieldData(`${mainClassName}-${currentPage}_form-fullname_field`, 'fullname', 'Nombre Completo');
    editProfileFormFields.push(fullNameField);

    const emailField = createFieldData(`${mainClassName}-${currentPage}_form-email_field`, 'email', 'Email');
    editProfileFormFields.push(emailField);

    const passwordField = createFieldData(`${mainClassName}-${currentPage}_form-password_field`, 'password', 'Contraseña', 'password');
    editProfileFormFields.push(passwordField);

    // TO-DO: Crear una lista de campos para el formulario de la edición del perfil

    const submitProfileItem = createSubmitBtn(`${mainClassName}-${currentPage}_form`, 'Actualizar');
    editProfileFormList.appendChild(submitProfileItem);

    /* TO-DO: Dar opción para poder eliminar la cuenta del usuario y volver a la página de login */

    return editProfileFormList;
};

export default createEditProfileForm;