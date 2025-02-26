import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerFromRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createLoginListenerFromRegisterPage';

    const callback = event => {
        try {
            event.preventDefault();

            const main = querySelectorChecker(`.${mainClassName}`, context);
            activateContentCleaner(main);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const registerEventListenerFromRegisterPage = createListenerConstructor(`.${className}-login_button`, context, callback, 'click');

    createNewListener(registerEventListenerFromRegisterPage, appConfig, HTMLElementsWithListeners, context);
};

export default createLoginListenerFromRegisterPage;