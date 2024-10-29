import createButton from '../../templates/Button/button';
import createEventsFilter from '../../utils/Listeners/Filter/eventsFilter';
import createEventsList from '../../templates/Event/List/eventsList';
import createEventListener from '../../utils/Listeners/Event/eventListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewInput from '../../templates/Input/input';
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import testCards from '../../../testCards';

const printEventsList = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const header = document.querySelector('.sc-header');
    header.className = 'sc-header-events';
    header.innerHTML += createUserNavbar('sc-header-nav', currentPage, 'random_user');
    header.innerHTML += createNewInput(`${header.className}-search`, 'text', '', 'Buscar eventos...');
    header.innerHTML += createButton(`${header.className}-create_btn`, 'Crear Nuevo Evento');

    const main = document.querySelector('.sc-main');
    main.className = 'sc-main-events';
    main.innerHTML += createEventsList(main.className, testCards);

    dropdownMenuToggle(HTMLElements);
    createEventListener(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    createEventsFilter(header.className, HTMLElements, main, testCards);
    createLogoutListener(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    createProfileListener(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);

    return main;
};

export default printEventsList;