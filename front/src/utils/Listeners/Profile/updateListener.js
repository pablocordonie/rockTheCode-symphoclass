import activatePageCleaner from '../../../utils/Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../../utils/Error/errorHandler';
import launchNewPage from '../../../utils/Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createUpdateProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createUpdateProfileListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, 'createUpdateProfileListener');

            const main = querySelectorChecker(`.${mainClassName}`, 'createUpdateProfileListener');
            activatePageCleaner(header, main);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
        } catch (error) {
            return errorHandler(error, 'createUpdateProfileListener', appConfig, HTMLElementsWithListeners);
        }
    };

    const updateProfileListener = createListenerConstructor(`.${mainClassName}-${currentPage}_form-${currentPage}_button`, context, callback, 'click');

    createNewListener(updateProfileListener, appConfig, HTMLElementsWithListeners, context);
};

export default createUpdateProfileListener;