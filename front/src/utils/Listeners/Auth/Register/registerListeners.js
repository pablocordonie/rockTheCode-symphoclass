import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createClickListener from '../../Click/createClickListener';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import launchLoginPage from '../../../Launcher/Login/launchLogin';

const createRegisterPageListeners = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const loginButtonFromRegisterPage = {
        callback: (event) => {
            event.preventDefault();

            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            HTMLElements.push(loginButtonFromRegisterPage);

            launchLoginPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector(`.sc-main-login_link-button`)
    };
    createClickListener(loginButtonFromRegisterPage.querySelector, loginButtonFromRegisterPage.callback);

    const registerButtonFromRegisterPage = {
        callback: (event) => {
            event.preventDefault();
            event.stopPropagation();
            HTMLElements.push(registerButtonFromRegisterPage);

            launchEventsPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-button`)
    };
    createClickListener(registerButtonFromRegisterPage.querySelector, registerButtonFromRegisterPage.callback);
};

export default createRegisterPageListeners;