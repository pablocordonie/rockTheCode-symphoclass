import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/eventListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerFromRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createRegisterListenerFromRegisterPage';

    const callback = event => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, 'createRegisterListenerFromRegisterPage');

            const main = querySelectorChecker(`.${mainClassName}`, 'createRegisterListenerFromRegisterPage');
            activatePageCleaner(header, main);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
        } catch (error) {
            return errorHandler(error, 'createRegisterListenerFromRegisterPage');
        }
    };

    const registerEventListenerFromRegisterPage = createListenerConstructor(`.${className}-${currentPage}_button`, context, callback, 'click');

    createNewListener(registerEventListenerFromRegisterPage, HTMLElementsWithListeners, context);
};

export default createRegisterListenerFromRegisterPage;