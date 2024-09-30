import './register.css';
import createLoginLink from '../../templates/Register/LoginLink/loginLink';
import createClickListener from '../../utils/Listeners/Click/createClickListener';
import createRegisterForm from '../../templates/Register/RegisterForm/registerForm';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEventsList';
import launchLoginPage from '../../utils/Launcher/Login/launchLogin';

const printRegisterForm = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const main = document.querySelector('.sc-main');
    main.innerHTML = '';

    const form = document.createElement('form');
    form.classList.add('sc-main-register_form');

    form.innerHTML += `
        ${createRegisterForm('sc-main-register_form-fields')}
    `;

    main.appendChild(form);

    main.innerHTML += `${createLoginLink('sc-main-login_link', '¿Ya estás registrado en The SymphoClass?')}`;

    const loginButton = {
        callback: () => {
            const main = document.querySelector('.sc-main');
            main.innerHTML = '';
            HTMLElements.push(loginButton);

            launchLoginPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-login_link-button')
    };
    createClickListener(loginButton.querySelector, loginButton.callback);

    const registerButton = {
        callback: (event) => {
            event.preventDefault();
            event.stopPropagation();
            HTMLElements.push(registerButton);

            launchEventsPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-register_form-button')
    };
    createClickListener(registerButton.querySelector, registerButton.callback);

    return main;
};

export default printRegisterForm;