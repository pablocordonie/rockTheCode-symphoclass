import createAuthFormContent from '../../components/Form/Auth/authForm';
import createLoginListenerInLoginPage from '../../utils/Listeners/Auth/Login/loginListener';
import createLoginListenerInRegisterPage from '../../utils/Listeners/Auth/Register/loginListener';
import createNewForm from '../../components/Form/form';
import createRegisterListenerInLoginPage from '../../utils/Listeners/Auth/Login/registerListener';
import createRegisterListenerInRegisterPage from '../../utils/Listeners/Auth/Register/registerListener';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printAuthForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;

    const listenerCreators = {
        login: [createLoginListenerInLoginPage, createRegisterListenerInLoginPage],
        register: [createLoginListenerInRegisterPage, createRegisterListenerInRegisterPage]
    };

    try {
        const main = querySelectorChecker(`.${mainClassName}`, 'printAuthForm');
        const formClassName = `${main.className}-${currentPage}_form`;

        const formContent = createAuthFormContent(formClassName, currentPage);
        const printForm = createNewForm(formClassName, formContent);
        main.appendChild(printForm);

        listenerCreators[currentPage].forEach(activateListener => activateListener(formClassName, appConfig, currentPage, HTMLElementsWithListeners));

        return main;
    } catch (error) {
        return errorHandler(error, 'printAuthForm');
    }
};

export default printAuthForm;