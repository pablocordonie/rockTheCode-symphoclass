import { createClickListenerWithLoader } from '../Click/clickListeners';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import launchProfilePage from '../../Launcher/Profile/launchProfile';

const createProfileListener = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {
    const editOption = document.querySelector('#edit-profile');
    if (!editOption) {
        return;
    }

    createClickListenerWithLoader(editOption, () => {
        const header = document.querySelector('.sc-events-header');
        const main = document.querySelector('.sc-events-main-list');

        header.className = 'sc-header';
        activateHeaderCleaner(header);

        main.className = 'sc-main';
        main.innerHTML = '';

        launchProfilePage(currentPage);
    }, appId, footerClassName, loaderClassName, webContentClassName);
};

export default createProfileListener;