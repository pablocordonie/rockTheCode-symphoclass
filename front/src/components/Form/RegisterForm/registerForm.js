import './registerForm.css';
import createLoginLink from '../../Link/Login/loginLink';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import generateFieldData from '../../../utils/Data/generateFieldData';
import generateList from '../../../utils/List/generateList';

const createRegisterFormContent = (className, currentPage) => {
    const registerFormFields = [];
    const registerOptionsToClick = [];

    const registerFormFieldsList = document.createElement('ul');
    registerFormFieldsList.className = `${className}-fields`;

    const usernameField = generateFieldData(`${className}-username_field`, 'username', 'Username');
    registerFormFields.push(usernameField);

    const fullnameField = generateFieldData(`${className}-fullname_field`, 'fullname', 'Fullname');
    registerFormFields.push(fullnameField);

    const emailField = generateFieldData(`${className}-email_field`, 'email', 'Email');
    registerFormFields.push(emailField);

    const passwordField = generateFieldData(`${className}-password_field`, 'password', 'Contraseña', 'password');
    registerFormFields.push(passwordField);

    console.log(registerFormFields);
    generateList(registerFormFieldsList, registerFormFields, field => createNewField(field));

    /* Util => generateOptionsToClick.js */
    const submitButtonItem = document.createElement('li');
    submitButtonItem.className = `${className}-${currentPage}_item`;
    const submitButton = createNewButton(`${className}-${currentPage}_button`, 'Registrarse');
    submitButtonItem.appendChild(submitButton);
    registerOptionsToClick.push(submitButtonItem);

    const loginLinkItem = document.createElement('li');
    loginLinkItem.className = `${className}-${currentPage}_item`;
    const loginLink = createLoginLink(`${className}-login`, '¿Ya estás registrado en The SymphoClass?');
    loginLinkItem.appendChild(loginLink);
    registerOptionsToClick.push(loginLinkItem);

    registerOptionsToClick.forEach(item => registerFormFieldsList.appendChild(item));
    return registerFormFieldsList;
};

export default createRegisterFormContent;