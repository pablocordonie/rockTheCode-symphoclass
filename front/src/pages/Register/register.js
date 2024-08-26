import './register.css';
import createLoginLink from '../../templates/Register/LoginLink/loginLink';
import createNewClickListener from '../../utils/Listeners/clickListener';
import createRegisterForm from '../../templates/Register/RegisterForm/registerForm';
import { launchEventsPage, launchLoginPage } from '../../../main';
import printLoader from '../../utils/Loader/printLoader';

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

    createNewClickListener(registerButton, (ev) => {
        ev.preventDefault();
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);
        launchEventsPage(currentPage);
    });

    createNewClickListener(loginButton, () => {
        const main = document.querySelector('.sc-main');
        main.innerHTML = '';
        launchLoginPage(currentPage);
    });

    return main;
};

export default printRegisterForm;