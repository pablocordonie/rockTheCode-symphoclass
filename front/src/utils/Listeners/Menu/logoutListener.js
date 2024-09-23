import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import { createClickListenerWithLoader } from '../Click/clickListeners';
import launchLoginPage from '../../Launcher/Login/launchLogin';

const createLogoutListener = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {
    const logoutOption = document.querySelector('#logout');

    createClickListenerWithLoader(logoutOption, () => {
        if (currentPage === 'events') {
            const eventsHeader = document.querySelector('.sc-events-header');
            const eventsMain = document.querySelector('.sc-events-main-list');

            eventsHeader.className = 'sc-header';
            activateHeaderCleaner(eventsHeader);

            eventsMain.className = 'sc-main';
            eventsMain.innerHTML = '';
        } else {
            const header = document.querySelector('.sc-header');
            const main = document.querySelector('.sc-main');

            activateHeaderCleaner(header);
            main.innerHTML = '';
        }

        launchLoginPage(currentPage);
    }, appId, footerClassName, loaderClassName, webContentClassName);
};

export default createLogoutListener;
