import './register.css'
import createLoginLink from '../../src/templates/Register/LoginLink/loginLink';
import createNewClickListener from '../../src/components/Listeners/clickListener';
import createRegisterForm from '../../src/templates/Register/RegisterForm/registerForm';
import printLoginForm from '../../pages/Login/login';

const printRegisterForm = () => {
    const main = document.querySelector('#app main');

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
        console.log('Has clickado Registrarse!')
    });

    createNewClickListener(loginButton, () => {
        const main = document.querySelector('#app main');
        main.innerHTML = '';
        printLoginForm();
    });

    return main;
};

export default printRegisterForm;