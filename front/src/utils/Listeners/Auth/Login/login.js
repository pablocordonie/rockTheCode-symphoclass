import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerFromLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createLoginListenerFromLoginPage';

    const callback = event => {
        try {
            event.preventDefault();

            const tsc = querySelectorChecker(`.${tscClassName}`, context);
            tsc.classList.remove('tsc-flex');

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            activatePageCleaner(header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const loginEventListenerFromLoginPage = createListenerConstructor(`.${className}-submit-btn`, context, callback, 'click');

    createNewListener(loginEventListenerFromLoginPage, appConfig, HTMLElementsWithListeners, context);
};

export default createLoginListenerFromLoginPage;