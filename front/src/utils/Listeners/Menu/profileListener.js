import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import launchProfilePage from '../../Launcher/Profile/launchProfile';

const createProfileListener = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const editOption = {
        callback: () => {
            HTMLElements.push(editOption);

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

            launchProfilePage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector('#edit-profile'),
        type: 'click'
    };
    const { callback, querySelector, type } = editOption;
    createNewListener(querySelector, callback, type);
};

export default createProfileListener;