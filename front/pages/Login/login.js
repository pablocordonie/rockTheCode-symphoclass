import './login.css'
import loginForm from '../../src/templates/Login/LoginForm/loginForm';
import loginRegisterLink from '../../src/templates/Login/LoginRegisterLink/loginRegisterLink';

const printLoginForm = () => {
    const main = document.querySelector('#app main');

    const form = document.createElement('form');
    form.classList.add('sc-main-login_form');

    form.innerHTML += `
        ${loginForm()}
    `;

    main.appendChild(form);

    main.innerHTML += `${loginRegisterLink()}`;
    return main;
};

export default printLoginForm;