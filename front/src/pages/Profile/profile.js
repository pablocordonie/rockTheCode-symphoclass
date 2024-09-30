import './profile.css';
import createClickListener from '../../utils/Listeners/Click/createClickListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewUserNav from '../../templates/Nav/user_nav';
import createProfileForm from '../../templates/Profile/ProfileForm/profileForm';
import dropdownMenuToggle from '../../utils/Toggle/dropdown_menu-toggle';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEventsList';

const printProfileForm = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const header = document.querySelector('.sc-header');
    header.innerHTML += createNewUserNav(currentPage, 'random_user');

    dropdownMenuToggle(HTMLElements);
    createLogoutListener(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);

    const main = document.querySelector('.sc-main');
    main.innerHTML = '';

    const form = document.createElement('form');
    form.classList.add('sc-main-profile_form');

    form.innerHTML += `
        ${createProfileForm('sc-main-profile_form-fields')}
    `;

    main.appendChild(form);

    const updateButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(updateButton);

            launchEventsPage(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-main-profile_form-button')
    }

    createClickListener(updateButton.querySelector, updateButton.callback);
};

export default printProfileForm;