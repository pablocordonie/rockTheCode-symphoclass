import './register.css';
import createLoginLink from '../../templates/Register/LoginLink/loginLink';
import { createClickListener, createClickListenerWithLoader } from '../../utils/Listeners/Click/clickListeners';
import createRegisterForm from '../../templates/Register/RegisterForm/registerForm';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEvents_list';
import launchLoginPage from '../../utils/Launcher/Login/launchLogin';

const printRegisterForm = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {
    const main = document.querySelector('.sc-main');

    const form = document.createElement('form');
    form.classList.add('sc-main-register_form');

    form.innerHTML += `
        ${createRegisterForm('sc-main-register_form-fields')}
    `;

    main.appendChild(form);

    main.innerHTML += `${createLoginLink('sc-main-login_link', '¿Ya estás registrado en The SymphoClass?')}`;

    const loginButton = document.querySelector('.sc-main-login_link-button');
    const registerButton = document.querySelector('.sc-main-register_form-button');

    createClickListenerWithLoader(registerButton, (ev) => {
        ev.preventDefault();
        launchEventsPage(currentPage);
    }, appId, footerClassName, loaderClassName, webContentClassName);

    createClickListener(loginButton, () => {
        const main = document.querySelector('.sc-main');
        main.innerHTML = '';
        launchLoginPage(currentPage);
    });

    return main;
};

export default printRegisterForm;