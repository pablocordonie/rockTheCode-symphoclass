import './login.css';
import createLoginForm from '../../templates/Login/LoginForm/loginForm';
import createClickListener from '../../utils/Listeners/Click/createClickListener';
import createRegisterLink from '../../templates/Login/RegisterLink/registerLink';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEventsList';
import launchRegisterPage from '../../utils/Launcher/Register/launchRegister';

const printLoginForm = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const main = document.querySelector('.sc-main');
    main.innerHTML = '';

    const form = document.createElement('form');
    form.classList.add('sc-main-login_form');
    form.innerHTML += `
        ${createLoginForm('sc-main-login_form-fields')}
    `;
    main.appendChild(form);

    main.innerHTML += `${createRegisterLink('sc-main-register_link', '¿No estás registrado en The SymphoClass?')}`;

    const loginButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(loginButton);

            launchEventsPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-login_form-button')
    };
    createClickListener(loginButton.querySelector, loginButton.callback);

    const registerButton = {
        callback: () => {
            const main = document.querySelector('.sc-main');
            main.innerHTML = '';
            HTMLElements.push(registerButton);

            launchRegisterPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-register_link-button')
    };
    createClickListener(registerButton.querySelector, registerButton.callback);

    return main;
};

export default printLoginForm;