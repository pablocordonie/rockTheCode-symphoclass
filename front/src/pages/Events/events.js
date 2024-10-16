import './events.css';
import activateContentCleaner from '../../utils/Cleaner/contentCleaner';
import createEventsFilter from '../../utils/Listeners/Filter/eventsFilter';
import createEventsList from '../../templates/Event/List/eventsList';
import createEventListener from '../../utils/Listeners/Event/eventListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewInput from '../../templates/Input/input';
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import createTagTemplate from '../../templates/Tag/tag';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import testCards from '../../../testCards';

const printEventsList = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const header = document.querySelector('.sc-header');
    header.className = 'sc-events-header';
    header.innerHTML += createUserNavbar(currentPage, 'random_user');
    header.innerHTML += createNewInput(`${header.className}-search`, 'text', '', 'Buscar eventos...');
    header.innerHTML += createTagTemplate('button', `${header.className}-create_btn`, 'Crear Nuevo Evento');

    const main = document.querySelector('.sc-main');
    main.className = 'sc-events-main-list';
    activateContentCleaner(main);
    createEventsList(bodyHeight, main, testCards);

    dropdownMenuToggle(HTMLElements);
    createEventListener(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    createEventsFilter(bodyHeight, header.className, HTMLElements, main, testCards);
    createLogoutListener(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    createProfileListener(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);

    return main;
};

export default printEventsList;