import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import launchLoginPage from '../../../Launcher/Login/launchLogin';

const createLoginListenerInRegisterPage = (appConfig, appId, currentPage, formClassName, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const loginButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, loginButton);

            const main = document.querySelector(`.${mainClassName}`);
            activateContentCleaner(main);

            launchLoginPage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector(`.${formClassName}-login_link-button`),
        type: 'click'
    };

    const { callback, querySelector, type } = loginButton;
    createNewListener(querySelector, callback, type);
};

export default createLoginListenerInRegisterPage;