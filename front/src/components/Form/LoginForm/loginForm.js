import './loginForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import createRegisterLink from '../../Link/Register/registerLink';
import generateFieldData from '../../../utils/Data/generateFieldData';
import generateList from '../../../utils/List/generateList';

const createLoginFormContent = (className, currentPage) => {
    const loginFormFields = [];
    const loginOptionsToClick = [];

    const loginFormFieldsList = document.createElement('ul');
    loginFormFieldsList.className = `${className}-fields`;

    const emailField = generateFieldData(`${className}-email_field`, 'email', 'Email');
    loginFormFields.push(emailField);

    const passwordField = generateFieldData(`${className}-password_field`, 'password', 'Contraseña', 'password');
    loginFormFields.push(passwordField);

    console.log(loginFormFields);
    generateList(loginFormFieldsList, loginFormFields, field => createNewField(field));

    /* Util => generateOptionsToClick.js */
    const submitButtonItem = document.createElement('li');
    submitButtonItem.className = `${className}-${currentPage}_item`;
    const submitButton = createNewButton(`${className}-${currentPage}_button`, 'Enviar');
    submitButtonItem.appendChild(submitButton);
    loginOptionsToClick.push(submitButtonItem);

    const registerLinkItem = document.createElement('li');
    registerLinkItem.className = `${className}-${currentPage}_item`;
    const registerLink = createRegisterLink(`${className}-register`, '¿No estás registrado en The SymphoClass?');
    registerLinkItem.appendChild(registerLink);
    loginOptionsToClick.push(registerLinkItem);

    loginOptionsToClick.forEach(item => loginFormFieldsList.appendChild(item));

    return loginFormFieldsList;
};

export default createLoginFormContent;