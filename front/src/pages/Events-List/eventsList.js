import './eventsList.css';
import activateContentCleaner from '../../utils/Cleaner/contentCleaner';
import createEventsList from '../../templates/Event/List/eventsList';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener'
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createTagTemplate from '../../templates/Tag/tag';
import createNewInput from '../../templates/Input/input';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdown_menu-toggle';

const printEventsList = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const header = document.querySelector('.sc-header');
    header.className = 'sc-events-header';
    header.innerHTML += createUserNavbar(currentPage, 'random_user');
    header.innerHTML += createNewInput('sc-events-header-search', 'text', 'Buscar eventos...');
    header.innerHTML += createTagTemplate('button', 'sc-events-header-create_btn', 'Crear nuevo evento');

    const main = document.querySelector('.sc-main');
    main.className = 'sc-events-main-list';
    activateContentCleaner(main);
    createEventsList(bodyHeight, main);

    dropdownMenuToggle(HTMLElements);
    createLogoutListener(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    createProfileListener(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);

    return main;
};

export default printEventsList;