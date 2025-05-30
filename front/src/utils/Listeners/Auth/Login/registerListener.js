import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerFromLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName } = appConfig;
    const context = 'createRegisterListenerFromLoginPage';

    const callback = event => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            activatePageCleaner(header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'register');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const registerEventListenerFromLoginPage = createListenerConstructor(`.${className}-register-btn`, context, callback, 'click');

    createNewListener(registerEventListenerFromLoginPage, appConfig, HTMLElementsWithListeners, context);
};

export default createRegisterListenerFromLoginPage;