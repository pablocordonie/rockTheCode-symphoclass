import './login.css'
//import { app, BASE_URL } from '../../main';
import loginForm from '../../src/components/LoginForm/loginForm';
/*
const postLogin = async () => {
    const response = await fetch(`${BASE_URL}/auth/login`);
    const user = await response.json();

    printLogin(user);
};
*/
const postLoginForm = () => {
    const main = document.querySelector('#app main');

    const form = document.createElement('form');
    form.classList.add('mc-main-login_form');

    form.innerHTML += `${loginForm()}`;

    main.appendChild(form);
    return main;
};

export default postLoginForm;