import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner'
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import launchLoginPage from '../../Launcher/Login/launchLogin';
import toggleClass from '../../Toggle/toggleClass';

const createLogoutListener = (appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const logoutOption = {
        callback: () => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, logoutOption);

            if (currentPage === 'events') {
                const eventsHeader = document.querySelector(`.${headerClassName}-events`);
                toggleClass(eventsHeader, `${headerClassName}`, currentPage);
                activateHeaderCleaner(eventsHeader);

                const eventsMain = document.querySelector(`.${mainClassName}-events`);
                toggleClass(eventsMain, `${mainClassName}`, currentPage);
                activateContentCleaner(eventsMain);
            } else {
                const header = document.querySelector(`.${headerClassName}`);
                activateHeaderCleaner(header);

                const main = document.querySelector(`.${mainClassName}`);
                activateContentCleaner(main);
            }

            launchLoginPage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector('#logout'),
        type: 'click'
    };
    const { callback, querySelector, type } = logoutOption;
    createNewListener(querySelector, callback, type);
};

export default createLogoutListener;
