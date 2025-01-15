import activatePageCleaner from '../../Cleaner/pageCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    const pageActions = {
        events: () => {
            const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, 'createProfileListener');

            const eventsMain = querySelectorChecker(`.${mainClassName}-events`, 'createProfileListener');
            activatePageCleaner(eventsHeader, eventsMain);

            toggleClass(eventsHeader, `${headerClassName}`, currentPage);
            toggleClass(eventsMain, `${mainClassName}`, currentPage);
        },
        default: () => {
            const header = querySelectorChecker(`.${headerClassName}`, 'createProfileListener');

            const main = querySelectorChecker(`.${mainClassName}`, 'createProfileListener');
            activatePageCleaner(header, main);
        }
    };

    const profileOption = {
        callback: () => {
            try {
                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, profileOption);

                currentPage === 'events' || currentPage === 'create-event' ? pageActions.events() : pageActions.default();

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'profile');
            } catch (error) {
                return errorHandler(error, 'createProfileListener');
            }
        },
        querySelector: querySelectorChecker('#profile', 'createProfileListener'),
        type: 'click'
    };
    const { callback, querySelector, type } = profileOption;
    createNewListener(querySelector, callback, type);
};

export default createProfileListener;