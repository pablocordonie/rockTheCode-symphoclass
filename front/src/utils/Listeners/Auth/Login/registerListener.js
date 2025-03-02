import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerFromLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createRegisterListenerFromLoginPage';

    const callback = event => {
        try {
            event.preventDefault();

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activateContentCleaner(main);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'register');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const registerEventListenerFromLoginPage = createListenerConstructor(`.${className}-register_button`, context, callback, 'click');

    createNewListener(registerEventListenerFromLoginPage, appConfig, HTMLElementsWithListeners, context);
};

export default createRegisterListenerFromLoginPage;