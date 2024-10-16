import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createNewListener from '../../Listener/createNewListener';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import launchRegisterPage from '../../../Launcher/Register/launchRegister';

const createLoginPageListeners = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const loginButtonFromLoginPage = {
        callback: (event) => {
            event.preventDefault();

            HTMLElements.push(loginButtonFromLoginPage);

            launchEventsPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-button`),
        type: 'click'
    };
    createNewListener(loginButtonFromLoginPage.querySelector, loginButtonFromLoginPage.callback, loginButtonFromLoginPage.type);

    const registerButtonFromLoginPage = {
        callback: (event) => {
            event.preventDefault();

            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            HTMLElements.push(registerButtonFromLoginPage);

            launchRegisterPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-register_link-button'),
        type: 'click'
    };
    createNewListener(registerButtonFromLoginPage.querySelector, registerButtonFromLoginPage.callback, registerButtonFromLoginPage.type);
};

export default createLoginPageListeners;