import activatePageCleaner from '../../../utils/Cleaner/pageCleaner';
import createNewListener from '../../../utils/Listeners/Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../utils/Filter/duplicatesRemover';
import errorHandler from '../../../utils/Error/errorHandler';
import launchNewPage from '../../../utils/Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createUpdateProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    const updateButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, updateButton);

                const header = querySelectorChecker(`.${headerClassName}`, 'createUpdateProfileListener');

                const main = querySelectorChecker(`.${mainClassName}`, 'createUpdateProfileListener');
                activatePageCleaner(header, main);

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
            } catch (error) {
                return errorHandler(error, 'createUpdateProfileListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-${currentPage}_button`, 'createUpdateProfileListener'),
        type: 'click'
    }
    const { callback, querySelector, type } = updateButton;
    createNewListener(querySelector, callback, type);
};

export default createUpdateProfileListener;