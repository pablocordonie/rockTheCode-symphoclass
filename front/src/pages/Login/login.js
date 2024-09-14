import './login.css'
import createLoginForm from '../../templates/Login/LoginForm/loginForm';
import createNewClickListener from '../../utils/Listeners/clickListener';
import createRegisterLink from '../../templates/Login/RegisterLink/registerLink';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEvents_list';
import launchRegisterPage from '../../utils/Launcher/Register/launchRegister';
import printLoader from '../../utils/Loader/printLoader';

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

    createNewClickListener(loginButton, (ev) => {
        ev.preventDefault();
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);
        launchEventsPage(currentPage);
    });

    createNewClickListener(registerButton, () => {
        const main = document.querySelector('.sc-main');
        main.innerHTML = '';
        launchRegisterPage(currentPage);
    });

    return main;
};

export default printLoginForm;