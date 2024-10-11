import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner'
import createClickListener from '../Click/createClickListener';
import launchLoginPage from '../../Launcher/Login/launchLogin';
import recalculateBodyHeight from '../../Height/recalculateBodyHeight';

const createLogoutListener = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const logoutOption = {
        callback: () => {
            bodyHeight = 110;
            recalculateBodyHeight(bodyHeight);

            HTMLElements.push(logoutOption);

            if (currentPage === 'events') {
                const eventsHeader = document.querySelector('.sc-events-header');
                eventsHeader.className = 'sc-header';
                activateHeaderCleaner(eventsHeader);

                const eventsMain = document.querySelector('.sc-events-main-list');
                eventsMain.className = 'sc-main';
                activateContentCleaner(eventsMain);
            } else {
                const header = document.querySelector('.sc-header');
                activateHeaderCleaner(header);

                const main = document.querySelector('.sc-main');
                activateContentCleaner(main);
            }

            launchLoginPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('#logout')
    };
    createClickListener(logoutOption.querySelector, logoutOption.callback);
};

export default createLogoutListener;
