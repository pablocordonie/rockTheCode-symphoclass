import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerInRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const registerButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, registerButton);

                const header = querySelectorChecker(`.${headerClassName}`, 'createRegisterListenerInRegisterPage');

                const main = querySelectorChecker(`.${mainClassName}`, 'createRegisterListenerInRegisterPage');
                activatePageCleaner(header, main);

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
            } catch (error) {
                return errorHandler(error, 'createRegisterListenerInRegisterPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-${currentPage}_button`, 'createRegisterListenerInRegisterPage'),
        type: 'click'
    };

    const { callback, querySelector, type } = registerButton;
    createNewListener(querySelector, callback, type);
};

export default createRegisterListenerInRegisterPage;