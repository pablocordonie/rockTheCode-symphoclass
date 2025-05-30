import createAuthHeaderContent from './Header/header';
import createAuthMainContent from './Main/main';
import createFooterBottomContent from '../../components/Paragraph/Footer/Bottom/bottom';
// import createLoginListenerInLoginPage from '../../utils/Listeners/Auth/Login/loginListener';
import createLoginListenerInRegisterPage from '../../utils/Listeners/Auth/Register/loginListener';
import createNewSmallParagraph from '../../components/Small/small';
import createRegisterListenerInLoginPage from '../../utils/Listeners/Auth/Login/registerListener';
// import createRegisterListenerInRegisterPage from '../../utils/Listeners/Auth/Register/registerListener';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printAuthForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, scClassName } = appConfig;
    const context = 'printAuthForm';

    // TO-DO: La página de eventos se encuentra en reformas...
    const listenerCreators = {
        login: [/*createLoginListenerInLoginPage, */createRegisterListenerInLoginPage],
        register: [createLoginListenerInRegisterPage/*, createRegisterListenerInRegisterPage*/]
    };

    try {
        const tsc = querySelectorChecker(`.${scClassName}`, context);
        tsc.classList.add(`${scClassName}-flex`);

        const header = querySelectorChecker(`.${headerClassName}`, context);
        header.classList.add(`${headerClassName}-flex`);
        createAuthHeaderContent(header, appConfig);

        const main = querySelectorChecker(`.${mainClassName}`, 'printAuthForm');

        const authForm = createAuthMainContent(`${mainClassName}-${currentPage}-form`, currentPage);
        main.appendChild(authForm);

        listenerCreators[currentPage].forEach(activateListener => activateListener(`${mainClassName}-${currentPage}-form`, appConfig, currentPage, HTMLElementsWithListeners));

        const footer = querySelectorChecker(`.${footerClassName}`, context);
        footer.style.backgroundColor = 'transparent';
        footer.style.paddingTop = 0;

        const footerCopyright = createFooterBottomContent(`${footerClassName}-${currentPage}-bottom`);
        footer.appendChild(footerCopyright);

        const footerCopyrightText = createNewSmallParagraph('\u00A9 The SymphoClass S.L., 2025. All rights reserved');
        footerCopyright.innerHTML = footerCopyrightText;

        return main;
    } catch (error) {
        return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
    }
};

export default printAuthForm;