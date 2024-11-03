import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import launchRegisterPage from '../../../Launcher/Register/launchRegister';

const createRegisterListenerInLoginPage = (appConfig, appId, currentPage, formClassName, HTMLElements, loaderClassName, mainClassName, scClassName) => {

    const registerButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, registerButton);

            const main = document.querySelector(`.${mainClassName}`);
            activateContentCleaner(main);

            launchRegisterPage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector(`.${formClassName}-register_link-button`),
        type: 'click'
    };

    const { callback, querySelector, type } = registerButton;
    createNewListener(querySelector, callback, type);
};

export default createRegisterListenerInLoginPage;