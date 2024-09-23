import './login.css'
import createLoginForm from '../../templates/Login/LoginForm/loginForm';
import { createClickListener, createClickListenerWithLoader } from '../../utils/Listeners/Click/clickListeners';
import createRegisterLink from '../../templates/Login/RegisterLink/registerLink';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEvents_list';
import launchRegisterPage from '../../utils/Launcher/Register/launchRegister';

const printLoginForm = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {
    const main = document.querySelector('.sc-main');

    const form = document.createElement('form');
    form.classList.add('sc-main-login_form');

    form.innerHTML += `
        ${createLoginForm('sc-main-login_form-fields')}
    `;

    main.appendChild(form);

    main.innerHTML += `${createRegisterLink('sc-main-register_link', '¿No estás registrado en The SymphoClass?')}`;

    const loginButton = document.querySelector('.sc-main-login_form-button');
    const registerButton = document.querySelector('.sc-main-register_link-button');

    createClickListenerWithLoader(loginButton, (ev) => {
        ev.preventDefault();
        launchEventsPage(currentPage);
    }, appId, footerClassName, loaderClassName, webContentClassName);

    createClickListener(registerButton, () => {
        const main = document.querySelector('.sc-main');
        main.innerHTML = '';
        launchRegisterPage(currentPage);
    });

    return main;
};

export default printLoginForm;