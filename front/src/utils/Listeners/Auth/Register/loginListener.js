import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchLoginPage from '../../../Launcher/Login/launchLogin';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerInRegisterPage = (className, appConfig, currentPage, HTMLElements) => {
    const { mainClassName } = appConfig;
    const loginButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, loginButton);

            const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createLoginListenerInRegisterPage', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                event.preventDefault();
                launchLoginPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createLoginListenerInRegisterPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-login_link-button`, appConfig, 'createLoginListenerInRegisterPage', `El HTMLElement de className .${className}-login_link-button no ha podido ser encontrado`, HTMLElements),
        type: 'click'
    };

    const { callback, querySelector, type } = loginButton;
    createNewListener(querySelector, callback, type);
};

export default createLoginListenerInRegisterPage;