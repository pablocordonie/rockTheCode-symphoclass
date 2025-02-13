import './authForm.css';
import createLoginLink from '../../Link/Login/loginLink';
import createNewField from '../../Field/field';
import createRegisterLink from '../../Link/Register/registerLink';
import createNewFieldData from '../../Field/Data/fieldData';
import createNewList from '../../List/list';
import createNewSubmitButton from '../../Button/Submit/submitButton';
import createNewTagTemplate from '../../Tag/tag';

const createAuthFormContent = (className, currentPage) => {
    const authFormFields = [];
    const authOptionsToClick = [];

    const authFormFieldsList = createNewTagTemplate('ul', `${className}-fields`);

    if (currentPage === 'register') {
        const usernameField = createNewFieldData(`${className}-username_field`, 'username', 'Username');
        authFormFields.push(usernameField);

        const fullnameField = createNewFieldData(`${className}-fullname_field`, 'fullname', 'Fullname');
        authFormFields.push(fullnameField);
    }

    const emailField = createNewFieldData(`${className}-email_field`, 'email', 'Email');
    authFormFields.push(emailField);

    const passwordField = createNewFieldData(`${className}-password_field`, 'password', 'Contraseña', 'password');
    authFormFields.push(passwordField);

    createNewList(authFormFieldsList, authFormFields, field => createNewField(field));

    if (currentPage === 'login') {
        const submitButtonItem = createNewSubmitButton(className, currentPage, 'Iniciar sesión');
        authOptionsToClick.push(submitButtonItem);

        const registerLinkItem = createRegisterLink(`${className}-register`);
        authOptionsToClick.push(registerLinkItem);
    } else {
        const submitButtonItem = createNewSubmitButton(className, currentPage, 'Registrarse');
        authOptionsToClick.push(submitButtonItem);

        const loginLinkItem = createLoginLink(`${className}-login`);
        authOptionsToClick.push(loginLinkItem);
    }

    authOptionsToClick.forEach(item => authFormFieldsList.appendChild(item));

    return authFormFieldsList;
};

export default createAuthFormContent;