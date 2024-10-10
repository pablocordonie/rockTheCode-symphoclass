import './auth.css';
import activateContentCleaner from '../../utils/Cleaner/contentCleaner';
import createLoginFormContent from '../../templates/Auth/Login/LoginForm/loginForm';
import createLoginPageListeners from '../../utils/Listeners/Auth/Login/loginListeners';
import createNewForm from '../../templates/Form/form';
import createRegisterFormContent from '../../templates/Auth/Register/RegisterForm/registerForm';
import createRegisterPageListeners from '../../utils/Listeners/Auth/Register/registerListeners';

const printAuthForm = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const main = document.querySelector('.sc-main');
    activateContentCleaner(main);

    main.innerHTML += createNewForm(`sc-main-${currentPage}_form`, `${currentPage === 'login' ? createLoginFormContent(`sc-main-${currentPage}_form-fields`, `sc-main-${currentPage}_form`) : createRegisterFormContent(`sc-main-${currentPage}_form-fields`, `sc-main-${currentPage}_form`)}`);

    currentPage === 'login' ? createLoginPageListeners(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) : createRegisterPageListeners(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);

    return main;
};

export default printAuthForm;