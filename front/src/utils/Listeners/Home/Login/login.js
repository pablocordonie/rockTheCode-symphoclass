import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createHomeLoginListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, footerClassName, mainClassName } = appConfig;
    const context = 'createHomeLoginListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            activatePageCleaner(header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');

        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const homeHeaderLoginListener = createListenerConstructor(`.${headerClassName}-${currentPage}-menu-login-btn`, context, callback, 'click');

    const homeMainLoginListener = createListenerConstructor(`.${mainClassName}-${currentPage}-hero-login-btn`, context, callback, 'click');

    const loginListeners = [homeHeaderLoginListener, homeMainLoginListener];
    loginListeners.forEach(loginListener => createNewListener(loginListener, appConfig, HTMLElementsWithListeners, context));
};

export default createHomeLoginListener;