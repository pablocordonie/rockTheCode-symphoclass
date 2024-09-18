import createMainTitle from '../../../templates/Title/title';
import createNewClickListener from '../clickListener';
import launchProfilePage from '../../Launcher/Profile/launchProfile';
import printLoader from '../../Loader/printLoader';

const createProfileListener = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {
    const editOption = document.querySelector('#edit-profile');

    createNewClickListener(editOption, () => {
        const header = document.querySelector('.sc-events-header');
        const main = document.querySelector('.sc-events-main-list');
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);

        header.className = 'sc-header';
        header.innerHTML = '';
        header.innerHTML += createMainTitle();

        main.className = 'sc-main';
        main.innerHTML = '';

        launchProfilePage(currentPage);
    });
};

export default createProfileListener;