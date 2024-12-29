import './loginForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import createRegisterLink from '../../Link/Register/registerLink';

const createLoginFormContent = (className, currentPage) => {
    const loginFieldsList = document.createElement('ul');
    loginFieldsList.className = `${className}-fields`;

    const emailField = createNewField(`${className}-email_field`, 'email', 'Email');
    loginFieldsList.appendChild(emailField);

    const passwordField = createNewField(`${className}-password_field`, 'password', 'Contraseña');
    loginFieldsList.appendChild(passwordField);

    const loginFieldsItems = [];
    const submitButtonItem = document.createElement('li');
    submitButtonItem.className = `${className}-${currentPage}_item`;
    const submitButton = createNewButton(`${className}-${currentPage}_button`, 'Enviar');
    submitButtonItem.appendChild(submitButton);
    loginFieldsItems.push(submitButtonItem);

    const registerLinkItem = document.createElement('li');
    registerLinkItem.className = `${className}-${currentPage}_item`;
    const registerLink = createRegisterLink(`${className}-register`, '¿No estás registrado en The SymphoClass?');
    registerLinkItem.appendChild(registerLink);
    loginFieldsItems.push(registerLinkItem);

    loginFieldsItems.forEach(item => loginFieldsList.appendChild(item));
    return loginFieldsList;
};

export default createLoginFormContent;