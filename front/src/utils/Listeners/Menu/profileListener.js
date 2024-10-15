import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Event-Listener/createNewListener';
import launchProfilePage from '../../Launcher/Profile/launchProfile';
import recalculateBodyHeight from '../../Height/recalculateBodyHeight';

const createProfileListener = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const editOption = {
        callback: () => {
            bodyHeight = 110;
            recalculateBodyHeight(bodyHeight);

            HTMLElements.push(editOption);

            const header = document.querySelector('.sc-events-header');
            header.className = 'sc-header';
            activateHeaderCleaner(header);

            const main = document.querySelector('.sc-events-main-list');
            main.className = 'sc-main';
            activateContentCleaner(main);

            launchProfilePage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('#edit-profile'),
        type: 'click'
    };
    const { callback, querySelector, type } = editOption;
    createNewListener(querySelector, callback, type);
};

export default createProfileListener;