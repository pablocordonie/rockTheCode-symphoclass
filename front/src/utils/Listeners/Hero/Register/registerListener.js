import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createHeroRegisterListener = (querySelector, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createHeroRegisterListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            activateHeaderCleaner(header);

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activateContentCleaner(main);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'register');

        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const heroRegisterListener = createListenerConstructor(`.${querySelector.className}`, context, callback, 'click');
    createNewListener(heroRegisterListener, appConfig, HTMLElementsWithListeners, context);
};

export default createHeroRegisterListener;