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
import toggleClass from '../../utils/Toggle/toggleClass';

const printEventsList = (appConfig, currentPage, HTMLElements) => {
    const { appId, headerClassName, loaderClassName, mainClassName, scClassName } = appConfig;

    const header = document.querySelector(`.${headerClassName}`);
    toggleClass(header, `${headerClassName}-events`, currentPage);
    header.innerHTML += createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
    header.innerHTML += createNewInput(`${header.className}-search`, 'text', '', 'Buscar eventos...');
    header.innerHTML += createButton(`${header.className}-create_btn`, 'Crear Nuevo Evento');

    const main = document.querySelector(`.${mainClassName}`);
    toggleClass(main, `${mainClassName}-events`, currentPage);
    main.innerHTML += createEventsList(main.className, testCards);

    dropdownMenuToggle(`${headerClassName}-nav`, HTMLElements);
    createEventListener(appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName);
    createEventsFilter(header.className, HTMLElements, main, testCards);
    createLogoutListener(appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName);
    createProfileListener(appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName);

    return main;
};

export default printEventsList;