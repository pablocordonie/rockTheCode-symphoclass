import './profile.css';
import activateHeaderCleaner from '../../utils/Cleaner/headerCleaner';
import { createClickListenerWithLoader } from '../../utils/Listeners/Click/clickListeners';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createMainTitle from '../../templates/Title/title';
import createNewUserNav from '../../templates/Nav/user_nav';
import createProfileForm from '../../templates/Profile/ProfileForm/profileForm';
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import dropdownMenuToggle from '../../utils/Toggle/dropdown_menu-toggle';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEvents_list';

const printProfileForm = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {

    const header = document.querySelector('.sc-header');
    header.innerHTML += createNewUserNav(currentPage, 'random_user');

    dropdownMenuToggle();
    createLogoutListener(appId, currentPage, footerClassName, loaderClassName, webContentClassName);
    createProfileListener(appId, currentPage, footerClassName, loaderClassName, webContentClassName);

    const main = document.querySelector('.sc-main');

    const form = document.createElement('form');
    form.classList.add('sc-main-profile_form');

    form.innerHTML += `
        ${createProfileForm('sc-main-profile_form-fields')}
    `;

    main.appendChild(form);

    const updateButton = document.querySelector('.sc-main-profile_form-button');

    createClickListenerWithLoader(updateButton, (event) => {
        event.preventDefault();

        activateHeaderCleaner(header);
        launchEventsPage(currentPage);
    }, appId, footerClassName, loaderClassName, webContentClassName);
};

export default printProfileForm;