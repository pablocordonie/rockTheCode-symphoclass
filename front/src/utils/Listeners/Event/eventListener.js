import activatePageCleaner from '../../Cleaner/pageCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createEventListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    const createNewEventButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, createNewEventButton);

                const header = querySelectorChecker(`.${headerClassName}-events`, 'createEventListener');

                const main = querySelectorChecker(`.${mainClassName}-events`, 'createEventListener');
                activatePageCleaner(header, main);

                toggleClass(header, `${headerClassName}`, currentPage);
                toggleClass(main, `${mainClassName}`, currentPage);

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'create_event');
            } catch (error) {
                return errorHandler(error, 'createEventListener');
            }
        },
        querySelector: querySelectorChecker(`.${headerClassName}-events-create_btn`, 'createEventListener'),
        type: 'click'
    };
    const { callback, querySelector, type } = createNewEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventListener;