import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/eventListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createLogoutListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createLogoutListener';

    const pageActions = {
        events: () => {
            const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, context);

            const eventsMain = querySelectorChecker(`.${mainClassName}-events`, context);
            activatePageCleaner(eventsHeader, eventsMain);

            toggleClass(eventsHeader, `${headerClassName}`, currentPage);
            toggleClass(eventsMain, `${mainClassName}`, currentPage);
        },
        default: () => {
            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activatePageCleaner(header, main);
        }
    };

    const callback = () => {
        try {
            currentPage === 'events' || currentPage === 'create-event' || currentPage === 'edit-profile' ? pageActions.events() : pageActions.default();

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');
        } catch (error) {
            return errorHandler(error, context);
        }
    };

    const logoutListener = createListenerConstructor('#logout', context, callback, 'click');

    createNewListener(logoutListener, HTMLElementsWithListeners, context);
};

export default createLogoutListener;
