import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchRegisterPage from '../../../Launcher/Register/launchRegister';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerInLoginPage = (className, appConfig, currentPage, HTMLElements) => {
    const { mainClassName } = appConfig;
    const registerButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, registerButton);

            const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createRegisterListenerInLoginPage', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                event.preventDefault();
                launchRegisterPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createRegisterListenerInLoginPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-register_link-button`, appConfig, 'createRegisterListenerInLoginPage', `El HTMLElement de className .${className}-register_link-button no ha podido ser encontrado`, HTMLElements),
        type: 'click'
    };

    const { callback, querySelector, type } = registerButton;
    createNewListener(querySelector, callback, type);
};

export default createRegisterListenerInLoginPage;