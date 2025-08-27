import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createEditProfileBackBtnListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName } = appConfig;
    const context = 'createEditProfileBackBtnListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            header.classList.remove(`${headerClassName}-flex`);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);
            footer.removeAttribute('style');

            activatePageCleaner(appConfig, currentPage, header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const authBackIcon = createListenerConstructor(`.${headerClassName}-${currentPage}-back-arrow-icon`, context, callback, 'click');

    createNewListener(authBackIcon, appConfig, HTMLElementsWithListeners, context);
};

export default createEditProfileBackBtnListener;