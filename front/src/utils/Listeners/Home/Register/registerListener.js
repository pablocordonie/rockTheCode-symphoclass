import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createHomeRegisterListener = (querySelector, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName } = appConfig;
    const context = 'createHomeRegisterListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            activateHeaderCleaner(header, appConfig);

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activateContentCleaner(main);

            const footer = querySelectorChecker(`.${footerClassName}`, context);
            footer.style.paddingTop = 0;
            activateContentCleaner(footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'register');

        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const heroRegisterListener = createListenerConstructor(`.${querySelector.className}`, context, callback, 'click');
    createNewListener(heroRegisterListener, appConfig, HTMLElementsWithListeners, context);
};

export default createHomeRegisterListener;