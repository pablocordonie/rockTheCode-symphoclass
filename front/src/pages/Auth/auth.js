import createLoginFormContent from '../../templates/Form/LoginForm/loginForm';
import createLoginPageListeners from '../../utils/Listeners/Auth/Login/loginListeners';
import createNewForm from '../../templates/Form/form';
import createRegisterFormContent from '../../templates/Form/RegisterForm/registerForm';
import createRegisterPageListeners from '../../utils/Listeners/Auth/Register/registerListeners';

const printAuthForm = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const main = document.querySelector('.sc-main');
    const formClassName = `${main.className}-${currentPage}_form`;

    main.innerHTML += createNewForm(formClassName, `${currentPage === 'login' ? createLoginFormContent(formClassName, currentPage) : createRegisterFormContent(formClassName, currentPage)}`);

    currentPage === 'login' ? createLoginPageListeners(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) : createRegisterPageListeners(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);

    return main;
};

export default printAuthForm;