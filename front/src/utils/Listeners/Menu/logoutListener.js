import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner'
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import launchLoginPage from '../../Launcher/Login/launchLogin';

const createLogoutListener = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const logoutOption = {
        callback: () => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, logoutOption);

            if (currentPage === 'events') {
                const eventsHeader = document.querySelector('.sc-header-events');
                eventsHeader.className = 'sc-header';
                activateHeaderCleaner(eventsHeader);

                const eventsMain = document.querySelector('.sc-main-events');
                eventsMain.className = 'sc-main';
                activateContentCleaner(eventsMain);
            } else {
                const header = document.querySelector('.sc-header');
                activateHeaderCleaner(header);

                const main = document.querySelector('.sc-main');
                activateContentCleaner(main);
            }

            launchLoginPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector('#logout'),
        type: 'click'
    };
    const { callback, querySelector, type } = logoutOption;
    createNewListener(querySelector, callback, type);
};

export default createLogoutListener;
