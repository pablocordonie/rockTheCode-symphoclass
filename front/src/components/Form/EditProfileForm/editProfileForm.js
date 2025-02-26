import './editProfileForm.css';
import createNewField from '../../Field/field';
import createNewFieldData from '../../Field/Data/fieldData';
import createNewList from '../../List/list';
import createNewSubmitButton from '../../Button/Submit/submitButton';
import createNewTagTemplate from '../../Tag/tag';

const createEditProfileForm = (className, appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const editProfileFormList = createNewTagTemplate('ul', className);

    const editProfileFormFields = [];

    /* TO-DO: Dar opción para poder cambiar la imagen del perfil */

    const userNameField = createNewFieldData(`${mainClassName}-${currentPage}_form-username_field`, 'username', 'Nombre de Usuario');
    editProfileFormFields.push(userNameField);

    const fullNameField = createNewFieldData(`${mainClassName}-${currentPage}_form-fullname_field`, 'fullname', 'Nombre Completo');
    editProfileFormFields.push(fullNameField);

    const emailField = createNewFieldData(`${mainClassName}-${currentPage}_form-email_field`, 'email', 'Email');
    editProfileFormFields.push(emailField);

    const passwordField = createNewFieldData(`${mainClassName}-${currentPage}_form-password_field`, 'password', 'Contraseña', 'password');
    editProfileFormFields.push(passwordField);

    const repeatPasswordField = createNewFieldData(`${mainClassName}-${currentPage}_form-repeat_password_field`, 'compare-password', 'Repetir Contraseña', 'password');
    editProfileFormFields.push(repeatPasswordField);

    createNewList(editProfileFormList, editProfileFormFields, field => createNewField(field));

    const submitProfileItem = createNewSubmitButton(`${mainClassName}-${currentPage}_form`, currentPage, 'Actualizar');
    editProfileFormList.appendChild(submitProfileItem);

    /* TO-DO: Dar opción para poder eliminar la cuenta del usuario y volver a la página de login */

    return editProfileFormList;
};

export default createEditProfileForm;