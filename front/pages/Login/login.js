import './login.css'
import createLoginForm from '../../src/templates/Login/LoginForm/loginForm';
import createNewClickListener from '../../src/components/Listeners/clickListener';
import createRegisterLink from '../../src/templates/Login/RegisterLink/registerLink';
import printRegisterForm from '../Register/register';

const printLoginForm = () => {
    const main = document.querySelector('#app main');

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
        console.log('Has clickado Enviar!');
    });

    createNewClickListener(registerButton, () => {
        const main = document.querySelector('#app main');
        main.innerHTML = '';
        printRegisterForm();
    });

    return main;
};

export default printLoginForm;