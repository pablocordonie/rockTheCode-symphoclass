import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createNewListener from '../../Listener/createNewListener';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import launchLoginPage from '../../../Launcher/Login/launchLogin';

const createRegisterPageListeners = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const loginButtonFromRegisterPage = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(loginButtonFromRegisterPage);

            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            launchLoginPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-login_link-button`),
        type: 'click'
    };
    createNewListener(loginButtonFromRegisterPage.querySelector, loginButtonFromRegisterPage.callback, loginButtonFromRegisterPage.type);

    const registerButtonFromRegisterPage = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(registerButtonFromRegisterPage);

            const header = document.querySelector('.sc-header');
            activateHeaderCleaner(header);
            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            launchEventsPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-${currentPage}_button`),
        type: 'click'
    };
    createNewListener(registerButtonFromRegisterPage.querySelector, registerButtonFromRegisterPage.callback, registerButtonFromRegisterPage.type);
};

export default createRegisterPageListeners;