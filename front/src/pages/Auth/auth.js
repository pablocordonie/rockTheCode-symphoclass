import createLoginFormContent from '../../templates/Form/LoginForm/loginForm';
import createLoginListenerInLoginPage from '../../utils/Listeners/Auth/Login/loginListener';
import createLoginListenerInRegisterPage from '../../utils/Listeners/Auth/Register/loginListener';
import createNewForm from '../../templates/Form/form';
import createRegisterFormContent from '../../templates/Form/RegisterForm/registerForm';
import createRegisterListenerInLoginPage from '../../utils/Listeners/Auth/Login/registerListener';
import createRegisterListenerInRegisterPage from '../../utils/Listeners/Auth/Register/registerListener';

const printAuthForm = (appConfig, currentPage, HTMLElements) => {
    const { appId, headerClassName, loaderClassName, mainClassName, scClassName } = appConfig;

    const main = document.querySelector(`.${mainClassName}`);
    const formClassName = `${main.className}-${currentPage}_form`;

    main.innerHTML += createNewForm(formClassName, `${currentPage === 'login' ? createLoginFormContent(formClassName, currentPage) : createRegisterFormContent(formClassName, currentPage)}`);

    if (currentPage === 'login') {
        createLoginListenerInLoginPage(appConfig, appId, currentPage, formClassName, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName);
        createRegisterListenerInLoginPage(appConfig, appId, currentPage, formClassName, HTMLElements, loaderClassName, mainClassName, scClassName);
    } else {
        createLoginListenerInRegisterPage(appConfig, appId, currentPage, formClassName, HTMLElements, loaderClassName, mainClassName, scClassName);
        createRegisterListenerInRegisterPage(appConfig, appId, currentPage, formClassName, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName);
    }

    return main;
};

export default printAuthForm;