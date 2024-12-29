import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerInLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const loginButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, loginButton);

                const header = querySelectorChecker(`.${headerClassName}`, 'createLoginListenerInLoginPage');

                const main = querySelectorChecker(`.${mainClassName}`, 'createLoginListenerInLoginPage');
                activatePageCleaner(header, main);

                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
            } catch (error) {
                return errorHandler(error, 'createLoginListenerInLoginPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-${currentPage}_button`, 'createLoginListenerInLoginPage'),
        type: 'click'
    };

    const { callback, querySelector, type } = loginButton;
    createNewListener(querySelector, callback, type);
};

export default createLoginListenerInLoginPage;