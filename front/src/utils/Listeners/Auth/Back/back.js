import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createAuthBackBtnListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createAuthBackBtnListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const tsc = querySelectorChecker(`.${tscClassName}`, context);
            tsc.classList.remove(`${tscClassName}-flex`);

            const header = querySelectorChecker(`.${headerClassName}`, context);
            header.classList.remove(`${headerClassName}-flex`);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);
            footer.removeAttribute('style');

            activatePageCleaner(header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'home');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const authBackIcon = createListenerConstructor(`.${headerClassName}-${currentPage}-back-arrow-icon`, context, callback, 'click');

    createNewListener(authBackIcon, appConfig, HTMLElementsWithListeners, context);
};

export default createAuthBackBtnListener;