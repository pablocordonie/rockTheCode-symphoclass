import createMainTitle from '../../../templates/Title/title';
import createNewClickListener from '../clickListener';
import launchLoginPage from '../../Launcher/Login/launchLogin';
import printLoader from '../../Loader/printLoader';

const createLogoutListener = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {
    const logoutOption = document.querySelector('#logout');

    createNewClickListener(logoutOption, () => {
        const header = document.querySelector('.sc-events-header');
        const main = document.querySelector('.sc-events-main-list');
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);

        header.className = 'sc-header';
        header.innerHTML = '';
        header.innerHTML += createMainTitle();

        main.className = 'sc-main';
        main.innerHTML = '';

        launchLoginPage(currentPage);
    });
};

export default createLogoutListener;
