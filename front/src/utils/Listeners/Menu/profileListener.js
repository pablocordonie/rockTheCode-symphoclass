import activateContentCleaner from '../../Cleaner/contentCleaner';
import createClickListener from '../Click/createClickListener';
import createMainTitle from '../../../templates/Title/title';
import launchProfilePage from '../../Launcher/Profile/launchProfile';

const createProfileListener = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const editOption = {
        callback: () => {
            HTMLElements.push(editOption);

            const header = document.querySelector('.sc-events-header');
            header.className = 'sc-header';
            activateContentCleaner(header);
            header.innerHTML += createMainTitle();

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