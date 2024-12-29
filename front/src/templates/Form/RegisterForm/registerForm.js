import './registerForm.css';
import createLoginLink from '../../Link/Login/loginLink';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';

const createRegisterFormContent = (className, currentPage) => {
    const registerFieldsList = document.createElement('ul');
    registerFieldsList.className = `${className}-fields`;

    const usernameField = createNewField(`${className}-username_field`, 'username', 'Username');
    registerFieldsList.appendChild(usernameField);

    const fullnameField = createNewField(`${className}-fullname_field`, 'fullname', 'Fullname');
    registerFieldsList.appendChild(fullnameField);

    const emailField = createNewField(`${className}-email_field`, 'email', 'Email');
    registerFieldsList.appendChild(emailField);

    const passwordField = createNewField(`${className}-password_field`, 'password', 'Contraseña');
    registerFieldsList.appendChild(passwordField);

    const registerFieldsItems = [];
    const submitButtonItem = document.createElement('li');
    submitButtonItem.className = `${className}-${currentPage}_item`;
    const submitButton = createNewButton(`${className}-${currentPage}_button`, 'Registrarse');
    submitButtonItem.appendChild(submitButton);
    registerFieldsItems.push(submitButtonItem);

    const loginLinkItem = document.createElement('li');
    loginLinkItem.className = `${className}-${currentPage}_item`;
    const loginLink = createLoginLink(`${className}-login`, '¿Ya estás registrado en The SymphoClass?');
    loginLinkItem.appendChild(loginLink);
    registerFieldsItems.push(loginLinkItem);

    registerFieldsItems.forEach(item => registerFieldsList.appendChild(item));
    return registerFieldsList;
};

export default createRegisterFormContent;