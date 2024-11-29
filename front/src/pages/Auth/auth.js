import createLoginFormContent from '../../templates/Form/LoginForm/loginForm';
import createLoginListenerInLoginPage from '../../utils/Listeners/Auth/Login/loginListener';
import createLoginListenerInRegisterPage from '../../utils/Listeners/Auth/Register/loginListener';
import createNewForm from '../../templates/Form/form';
import createRegisterFormContent from '../../templates/Form/RegisterForm/registerForm';
import createRegisterListenerInLoginPage from '../../utils/Listeners/Auth/Login/registerListener';
import createRegisterListenerInRegisterPage from '../../utils/Listeners/Auth/Register/registerListener';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printAuthForm = (appConfig, currentPage, HTMLElements) => {
    const { mainClassName } = appConfig;

    if (currentPage === 'login') {
        try {
            const main = querySelectorChecker(`.${mainClassName}`, 'printAuthForm', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`);
            const formClassName = `${main.className}-${currentPage}_form`;

            main.innerHTML += createNewForm(formClassName, createLoginFormContent(formClassName, currentPage));

            createLoginListenerInLoginPage(formClassName, appConfig, currentPage, HTMLElements);
            createRegisterListenerInLoginPage(formClassName, appConfig, currentPage, HTMLElements);

            return main;
        } catch (error) {
            errorHandler(error, 'printAuthForm');
        }
    } else {
        try {
            const main = querySelectorChecker(`.${mainClassName}`, 'printAuthForm', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`);
            const formClassName = `${main.className}-${currentPage}_form`;

            main.innerHTML += createNewForm(formClassName, createRegisterFormContent(formClassName, currentPage));

            createLoginListenerInRegisterPage(formClassName, appConfig, currentPage, HTMLElements);
            createRegisterListenerInRegisterPage(formClassName, appConfig, currentPage, HTMLElements);

            return main;
        } catch (error) {
            errorHandler(error, 'printAuthForm');
        }
    }
};

export default printAuthForm;