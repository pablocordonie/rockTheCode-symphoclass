import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createHomeLoginListener = (querySelector, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, footerClassName, mainClassName } = appConfig;
    const context = 'createHomeLoginListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            activateHeaderCleaner(header);

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activateContentCleaner(main);

            const footer = querySelectorChecker(`.${footerClassName}`, context);
            footer.style.paddingTop = 0;
            activateContentCleaner(footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');

        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const heroLoginListener = createListenerConstructor(`.${querySelector.className}`, context, callback, 'click');
    createNewListener(heroLoginListener, appConfig, HTMLElementsWithListeners, context);
};

export default createHomeLoginListener;