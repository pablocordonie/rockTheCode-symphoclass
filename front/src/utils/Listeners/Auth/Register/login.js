import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerFromRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createLoginListenerFromRegisterPage';

    const callback = event => {
        try {
            event.preventDefault();

            const tsc = querySelectorChecker(`.${tscClassName}`, context);
            tsc.classList.remove('tsc-flex');

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            activatePageCleaner(header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const registerEventListenerFromRegisterPage = createListenerConstructor(`.${className}-login-btn`, context, callback, 'click');

    createNewListener(registerEventListenerFromRegisterPage, appConfig, HTMLElementsWithListeners, context);
};

export default createLoginListenerFromRegisterPage;