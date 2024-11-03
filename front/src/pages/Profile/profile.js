import activateContentCleaner from '../../utils/Cleaner/contentCleaner';
import activateHeaderCleaner from '../../utils/Cleaner/headerCleaner';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewForm from '../../templates/Form/form';
import createNewListener from '../../utils/Listeners/Listener/createNewListener';
import createProfileForm from '../../templates/Form/ProfileForm/profileForm';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import duplicatesRemoverIntoArray from '../../utils/Filter/duplicatesRemover';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEventsList';

const printProfileForm = (appConfig, currentPage, HTMLElements) => {
    const { appId, headerClassName, loaderClassName, mainClassName, scClassName } = appConfig;

    const header = document.querySelector(`.${headerClassName}`);
    header.innerHTML += createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');

    dropdownMenuToggle(`${headerClassName}-nav`, HTMLElements);
    createLogoutListener(appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName);

    const main = document.querySelector(`.${mainClassName}`);
    main.innerHTML += createNewForm(`${mainClassName}-${currentPage}_form`, `${createProfileForm(`${mainClassName}-${currentPage}_form-fields`, currentPage)}`);

    const updateButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, updateButton);

            const header = document.querySelector(`.${headerClassName}`);
            activateHeaderCleaner(header);
            const main = document.querySelector(`.${mainClassName}`);
            activateContentCleaner(main);

            launchEventsPage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector(`.${mainClassName}-${currentPage}_form-${currentPage}_button`),
        type: 'click'
    }
    const { callback, querySelector, type } = updateButton;
    createNewListener(querySelector, callback, type);

    return main;
};

export default printProfileForm;