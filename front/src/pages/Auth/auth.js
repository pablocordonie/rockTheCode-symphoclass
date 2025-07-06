import createAuthBackBtnListener from '../../utils/Listeners/Auth/Back/back';
import createAuthFooterContent from './Footer/footer';
import createAuthHeaderContent from './Header/header';
import createAuthMainContent from './Main/main';
import createLoginListenerInLoginPage from '../../utils/Listeners/Auth/Login/login';
import createLoginListenerInRegisterPage from '../../utils/Listeners/Auth/Register/login';
import createRegisterListenerInLoginPage from '../../utils/Listeners/Auth/Login/register';
import createRegisterListenerInRegisterPage from '../../utils/Listeners/Auth/Register/register';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printAuthForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'printAuthForm';

    const listenerCreators = {
        login: [createLoginListenerInLoginPage, createRegisterListenerInLoginPage],
        register: [createLoginListenerInRegisterPage, createRegisterListenerInRegisterPage]
    };

    try {
        const tsc = querySelectorChecker(`.${tscClassName}`, context);
        tsc.classList.add(`${tscClassName}-flex`);

        const header = querySelectorChecker(`.${headerClassName}`, context);
        header.classList.add(`${headerClassName}-flex`);

        const headerContent = createAuthHeaderContent(appConfig, currentPage);
        header.appendChild(headerContent);

        createAuthBackBtnListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printAuthForm');

        const authForm = createAuthMainContent(`${mainClassName}-${currentPage}-form`, currentPage);
        main.appendChild(authForm);

        listenerCreators[currentPage].forEach(activateListener => activateListener(`${mainClassName}-${currentPage}-form`, appConfig, currentPage, HTMLElementsWithListeners));

        const footer = querySelectorChecker(`.${footerClassName}`, context);
        footer.style.backgroundColor = 'transparent';
        createAuthFooterContent(footer, appConfig, currentPage);

        return main;
    } catch (error) {
        return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
    }
};

export default printAuthForm;