import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerInLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const registerButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, registerButton);
                const main = querySelectorChecker(`.${mainClassName}`, 'createRegisterListenerInLoginPage');
                activateContentCleaner(main);

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'register');
            } catch (error) {
                return errorHandler(error, 'createRegisterListenerInLoginPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-register_button`, 'createRegisterListenerInLoginPage'),
        type: 'click'
    };

    const { callback, querySelector, type } = registerButton;
    createNewListener(querySelector, callback, type);
};

export default createRegisterListenerInLoginPage;