import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createProfileListener';

    const pageActions = {
        events: () => {
            const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, context);

            const eventsMain = querySelectorChecker(`.${mainClassName}-events`, context);
            activatePageCleaner(eventsHeader, eventsMain);

            toggleClass(eventsHeader, headerClassName, `${headerClassName}-events`);
            toggleClass(eventsMain, mainClassName, `${mainClassName}-events`);
        },
        default: () => {
            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activatePageCleaner(header, main);
        }
    };

    const callback = () => {
        try {
            currentPage === 'events' || currentPage === 'create-event' ? pageActions.events() : pageActions.default();

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'profile');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const profileListener = createListenerConstructor('#profile', context, callback, 'click');

    createNewListener(profileListener, appConfig, HTMLElementsWithListeners, context);
};

export default createProfileListener;