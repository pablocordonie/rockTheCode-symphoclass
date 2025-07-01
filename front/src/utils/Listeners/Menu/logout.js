import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createLogoutListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createLogoutListener';

    const callback = () => {
        try {
            const eventCreatorContent = querySelectorChecker(`.${tscClassName}-event`);
            eventCreatorContent.remove();

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            activatePageCleaner(header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const logoutListener = createListenerConstructor('#logout', context, callback, 'click');

    createNewListener(logoutListener, appConfig, HTMLElementsWithListeners, context);
};

export default createLogoutListener;
