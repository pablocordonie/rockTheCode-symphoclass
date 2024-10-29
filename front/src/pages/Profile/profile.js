import activateContentCleaner from '../../utils/Cleaner/contentCleaner';
import activateHeaderCleaner from '../../utils/Cleaner/headerCleaner';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewForm from '../../templates/Form/form';
import createNewListener from '../../utils/Listeners/Listener/createNewListener';
import createProfileForm from '../../templates/Form/ProfileForm/profileForm';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEventsList';

const printProfileForm = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const header = document.querySelector('.sc-header');
    header.innerHTML += createUserNavbar('sc-header-nav', currentPage, 'random_user');

    dropdownMenuToggle(HTMLElements);
    createLogoutListener(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);

    const main = document.querySelector('.sc-main');
    main.innerHTML += createNewForm(`sc-main-${currentPage}_form`, `${createProfileForm(`sc-main-${currentPage}_form-fields`, currentPage)}`);

    const updateButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(updateButton);

            const header = document.querySelector('.sc-header');
            activateHeaderCleaner(header);
            const main = document.querySelector('.sc-main');
            activateContentCleaner(main);

            launchEventsPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-${currentPage}_button`),
        type: 'click'
    }
    const { callback, querySelector, type } = updateButton;
    createNewListener(querySelector, callback, type);

    return main;
};

export default printProfileForm;