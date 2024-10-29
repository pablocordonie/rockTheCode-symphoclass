import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createNewListener from '../../Listener/createNewListener';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import launchRegisterPage from '../../../Launcher/Register/launchRegister';

const createLoginPageListeners = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const loginButtonFromLoginPage = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(loginButtonFromLoginPage);

            const header = document.querySelector('.sc-header');
            activateHeaderCleaner(header);
            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            launchEventsPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-${currentPage}_button`),
        type: 'click'
    };
    createNewListener(loginButtonFromLoginPage.querySelector, loginButtonFromLoginPage.callback, loginButtonFromLoginPage.type);

    const registerButtonFromLoginPage = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(registerButtonFromLoginPage);

            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            launchRegisterPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-register_link-button`),
        type: 'click'
    };
    createNewListener(registerButtonFromLoginPage.querySelector, registerButtonFromLoginPage.callback, registerButtonFromLoginPage.type);
};

export default createLoginPageListeners;