import activatePageCleaner from '../../Cleaner/pageCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createLogoutListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    const pageActions = {
        events: () => {
            const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, 'createLogoutListener');

            const eventsMain = querySelectorChecker(`.${mainClassName}-events`, 'createLogoutListener');
            activatePageCleaner(eventsHeader, eventsMain);

            toggleClass(eventsHeader, `${headerClassName}`, currentPage);
            toggleClass(eventsMain, `${mainClassName}`, currentPage);
        },
        default: () => {
            const header = querySelectorChecker(`.${headerClassName}`, 'createLogoutListener');

            const main = querySelectorChecker(`.${mainClassName}`, 'createLogoutListener');
            activatePageCleaner(header, main);
        }
    };

    const logoutOption = {
        callback: () => {
            try {
                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, logoutOption);

                currentPage === 'events' || currentPage === 'create-event' || currentPage === 'edit-profile' ? pageActions.events() : pageActions.default();

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');
            } catch (error) {
                return errorHandler(error, 'createLogoutListener');
            }
        },
        querySelector: querySelectorChecker('#logout', 'createLogoutListener'),
        type: 'click'
    };
    const { callback, querySelector, type } = logoutOption;
    createNewListener(querySelector, callback, type);
};

export default createLogoutListener;
