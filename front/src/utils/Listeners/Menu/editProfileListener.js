import activatePageCleaner from '../../Cleaner/pageCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createEditProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    const pageActions = {
        events: () => {
            const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, 'createEditProfileListener');

            const eventsMain = querySelectorChecker(`.${mainClassName}-events`, 'createEditProfileListener');
            activatePageCleaner(eventsHeader, eventsMain);

            toggleClass(eventsHeader, `${headerClassName}`, currentPage);
            toggleClass(eventsMain, `${mainClassName}`, currentPage);
        },
        default: () => {
            const header = querySelectorChecker(`.${headerClassName}`, 'createEditProfileListener');

            const main = querySelectorChecker(`.${mainClassName}`, 'createEditProfileListener');
            activatePageCleaner(header, main);
        }
    };

    const editOption = {
        callback: () => {
            try {
                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, editOption);

                currentPage === 'events' || currentPage === 'create-event' ? pageActions.events() : pageActions.default();

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'edit_profile');
            } catch (error) {
                return errorHandler(error, 'createEditProfileListener');
            }
        },
        querySelector: querySelectorChecker('#edit-profile', 'createEditProfileListener'),
        type: 'click'
    };
    const { callback, querySelector, type } = editOption;
    createNewListener(querySelector, callback, type);
};

export default createEditProfileListener;