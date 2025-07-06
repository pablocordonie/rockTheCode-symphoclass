import { /*barsClassNames, */userIconClassNames } from '../../../config/config';
import createEventsNav from '../../../components/Nav/Events/events';
import createEventsNavCreateEventBtn from '../../../components/Button/Events/Header/Event/event';
// import createEventsNavDropdownBars from '../../../components/Icon/Events/Bars/bars';
import createEventsNavDropdownMenu from '../../../components/List/Events/Header/Menu/menu';
import createEventsNavItem from '../../../components/Item/Events/Header/Nav/nav';
import createEventsNavItems from '../../../components/List/Events/Header/Nav/nav';
import createEventsNavLogoContent from '../../../components/Div/Logo/logo';
import createEventsNavMainContentList from '../../../components/List/Events/Header/Content/mainContent';
import createEventsNavMainContentItem from '../../../components/Item/Events/Header/Content/mainContent';
import createEventsNavProfileMenuOption from '../../../components/Item/Events/Header/Menu/menu';
import createEventsNavProfileOptionParagraph from '../../../components/Paragraph/Events/Header/Menu/Option/option';
import createEventsNavSearchInput from '../../../components/Input/Events/Search/search';
import createEventsNavUserContent from '../../../components/List/Events/Header/Profile/profile';
import createEventsNavUserInfoItem from '../../../components/Item/Events/Header/User/user';
import createEventsNavUserIcon from '../../../components/Icon/Events/User/user';
import createEventsNavUsername from '../../../components/Paragraph/Events/Header/User/user';
import createLogo from '../../../components/Title/H1/Logo/logo';

const createEventsHeaderContent = (appConfig, currentPage) => {
    const { headerClassName } = appConfig;
    const navItems = [];
    const navMainItems = [];
    const navUserItems = [];

    const eventsNav = createEventsNav(`${headerClassName}-${currentPage}-nav`);

    const eventsNavItems = createEventsNavItems(`${eventsNav.className}-items`);
    eventsNav.appendChild(eventsNavItems);

    const eventsNavMainContent = createEventsNavMainContentList(`${eventsNav.className}-main-content`);
    navItems.push(eventsNavMainContent);

    // TO-DO: Crear componente de barras para almacenar las opciones de filtrado y de creación de nuevos eventos en dispositivos móviles a la izquierda del logo
    /*
    const eventsNavDropdownBars = createEventsNavDropdownBars(`${eventsNavUserContent.className}-options-icon`);
    barsClassNames.forEach(barsClassName => eventsNavDropdownBars.classList.add(barsClassName));
    navUserItems.push(eventsNavDropdownBars);
    */

    const eventsNavLogoContent = createEventsNavLogoContent(`${eventsNav.className}-logo`);
    navMainItems.push(eventsNavLogoContent);

    const eventsNavLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    eventsNavLogoContent.appendChild(eventsNavLogo);

    const eventsNavSearchInput = createEventsNavSearchInput(`${eventsNav.className}-search-input`, 'search', 'search', 'Buscar eventos...');
    navMainItems.push(eventsNavSearchInput);

    const eventsNavCreateEventBtn = createEventsNavCreateEventBtn(`${eventsNav.className}-create-btn`, 'Crear Nuevo Evento', 'create-event');
    navMainItems.push(eventsNavCreateEventBtn);

    navMainItems.forEach(item => {
        const eventsNavMainItem = createEventsNavMainContentItem(`${eventsNav.className}-main-item`);
        eventsNavMainContent.appendChild(eventsNavMainItem);

        eventsNavMainItem.appendChild(item);
    });

    const eventsNavUserContent = createEventsNavUserContent(`${eventsNav.className}-user`);
    navItems.push(eventsNavUserContent);

    const eventsNavUsername = createEventsNavUsername(`${eventsNavUserContent.className}-name`, 'random_user');
    navUserItems.push(eventsNavUsername);

    const eventsNavUserIcon = createEventsNavUserIcon(`${eventsNavUserContent.className}-icon`);
    userIconClassNames.forEach(iconClassName => eventsNavUserIcon.classList.add(iconClassName));
    navUserItems.push(eventsNavUserIcon);

    const eventsNavDropdownMenu = createEventsNavDropdownMenu(`${eventsNavUserContent.className}-menu`);
    navUserItems.push(eventsNavDropdownMenu);

    if (currentPage === 'events' || currentPage === 'create_event') {
        const eventsNavEditProfileMenuOption = createEventsNavProfileMenuOption(`${eventsNavDropdownMenu.className}-edit-profile`);
        eventsNavDropdownMenu.appendChild(eventsNavEditProfileMenuOption);

        const eventsNavEditProfileParagraph = createEventsNavProfileOptionParagraph(`${eventsNavEditProfileMenuOption.className}-option`, 'Cambiar Perfil', 'edit-profile');
        eventsNavEditProfileMenuOption.appendChild(eventsNavEditProfileParagraph);
    }

    const eventsNavLogoutOptionItem = createEventsNavProfileMenuOption(`${eventsNavDropdownMenu.className}-logout`);
    eventsNavDropdownMenu.appendChild(eventsNavLogoutOptionItem);

    const eventsNavLogoutOptionParagraph = createEventsNavProfileOptionParagraph(`${eventsNavLogoutOptionItem.className}-option`, 'Cerrar Sesión', 'logout');
    eventsNavLogoutOptionItem.appendChild(eventsNavLogoutOptionParagraph);

    navUserItems.forEach(item => {
        const eventsNavUserInfoItem = createEventsNavUserInfoItem(`${eventsNavUserContent.className}-item`);
        eventsNavUserContent.appendChild(eventsNavUserInfoItem);

        eventsNavUserInfoItem.appendChild(item);
    });

    navItems.forEach(item => {
        const eventsNavItem = createEventsNavItem(`${eventsNav.className}-item`);
        eventsNavItems.appendChild(eventsNavItem);

        eventsNavItem.appendChild(item);
    });

    return eventsNav;
};

export default createEventsHeaderContent;