import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import launchProfilePage from '../../Launcher/Profile/launchProfile';
import toggleClass from '../../Toggle/toggleClass';

const createProfileListener = (appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const editOption = {
        callback: () => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, editOption);

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

            launchProfilePage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector('#edit-profile'),
        type: 'click'
    };
    const { callback, querySelector, type } = editOption;
    createNewListener(querySelector, callback, type);
};

export default createProfileListener;