import activateContentCleaner from '../../Cleaner/contentCleaner';
import createClickListener from '../Click/createClickListener';
import createMainTitle from '../../../templates/Title/title';
import launchLoginPage from '../../Launcher/Login/launchLogin';

const createLogoutListener = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const logoutOption = {
        callback: () => {
            HTMLElements.push(logoutOption);

            if (currentPage === 'events') {
                const eventsHeader = document.querySelector('.sc-events-header');
                eventsHeader.className = 'sc-header';
                activateContentCleaner(eventsHeader);
                eventsHeader.innerHTML += createMainTitle();

                const eventsMain = document.querySelector('.sc-events-main-list');
                eventsMain.className = 'sc-main';
                activateContentCleaner(eventsMain);
            } else {
                const header = document.querySelector('.sc-header');
                activateContentCleaner(header);
                header.innerHTML += createMainTitle();

                const main = document.querySelector('.sc-main');
                activateContentCleaner(main);
            }

            launchLoginPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('#logout')
    };
    createClickListener(logoutOption.querySelector, logoutOption.callback);
};

export default createLogoutListener;
