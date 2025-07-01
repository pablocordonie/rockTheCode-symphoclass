import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createUpdateProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createUpdateProfileListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const tsc = querySelectorChecker(`.${tscClassName}`, context);
            tsc.classList.remove('tsc-flex');

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activatePageCleaner(header, main);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const updateProfileListener = createListenerConstructor(`.${mainClassName}-${currentPage}-form-submit-btn`, context, callback, 'click');

    createNewListener(updateProfileListener, appConfig, HTMLElementsWithListeners, context);
};

export default createUpdateProfileListener;