import activateContentCleaner from '../../../Cleaner/contentCleaner';
import createClickListener from '../../Click/createClickListener';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import launchRegisterPage from '../../../Launcher/Register/launchRegister';

const createLoginPageListeners = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const loginButtonFromLoginPage = {
        callback: (event) => {
            event.preventDefault();

            HTMLElements.push(loginButtonFromLoginPage);

            launchEventsPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-button`)
    };
    createClickListener(loginButtonFromLoginPage.querySelector, loginButtonFromLoginPage.callback);

    const registerButtonFromLoginPage = {
        callback: (event) => {
            event.preventDefault();

            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            HTMLElements.push(registerButtonFromLoginPage);

            launchRegisterPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-register_link-button')
    };
    createClickListener(registerButtonFromLoginPage.querySelector, registerButtonFromLoginPage.callback);
};

export default createLoginPageListeners;