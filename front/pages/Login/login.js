import './login.css'
import createNewForm from '../../src/templates/Form/form';
import createRegisterLink from '../../src/templates/Login/RegisterLink/registerLink';

const printLoginForm = () => {
    const main = document.querySelector('#app main');

    const form = document.createElement('form');
    form.classList.add('sc-main-login_form');

    form.innerHTML += `
        ${createNewForm('sc-main-login_form-fields')}
    `;

    main.appendChild(form);

    main.innerHTML += `${createRegisterLink('sc-main-register_link')}`;
    return main;
};

export default printLoginForm;