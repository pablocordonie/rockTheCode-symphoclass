import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createClickListener from '../Click/createClickListener';
import launchProfilePage from '../../Launcher/Profile/launchProfile';

const createProfileListener = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const editOption = {
        callback: () => {
            HTMLElements.push(editOption);

            const header = document.querySelector('.sc-events-header');
            header.className = 'sc-header';
            activateHeaderCleaner(header);

            const main = document.querySelector('.sc-events-main-list');
            main.className = 'sc-main';
            activateContentCleaner(main);

            launchProfilePage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('#edit-profile')
    };
    createClickListener(editOption.querySelector, editOption.callback);
};

export default createProfileListener;