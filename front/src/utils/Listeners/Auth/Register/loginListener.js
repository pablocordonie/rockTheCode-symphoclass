import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerInRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const loginButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, loginButton);
                const main = querySelectorChecker(`.${mainClassName}`, 'createLoginListenerInRegisterPage');
                activateContentCleaner(main);

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'login');
            } catch (error) {
                return errorHandler(error, 'createLoginListenerInRegisterPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-login_button`, 'createLoginListenerInRegisterPage'),
        type: 'click'
    };

    const { callback, querySelector, type } = loginButton;
    createNewListener(querySelector, callback, type);
};

export default createLoginListenerInRegisterPage;