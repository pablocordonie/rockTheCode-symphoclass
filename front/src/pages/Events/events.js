import createConfirmAttendanceListeners from '../../utils/Listeners/Event/Confirm-Attendance/confirmAttendanceListeners';
import createEditProfileListener from '../../utils/Listeners/Menu/editProfileListener';
import createEventsFilter from '../../utils/Listeners/Filter/eventsFilter';
import createEventsList from '../../components/Event/List/eventsList';
import createEventListener from '../../utils/Listeners/Event/eventListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewButton from '../../components/Button/button';
import createNewInput from '../../components/Input/input';
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createUserNavbar from '../../components/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';
import testCards from '../../utils/Data/testCards';
import toggleClass from '../../utils/Toggle/toggleClass';

const printEventsList = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printEventsList');
        toggleClass(header, headerClassName, `${headerClassName}-events`);

        const headerNavbar = createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        const headerInput = createNewInput(`${header.className}-search_input`, '', 'Buscar eventos...');
        header.appendChild(headerInput);

        const headerEventCreatorButton = createNewButton(`${headerClassName}-events-create_btn`, 'Crear Nuevo Evento');
        header.appendChild(headerEventCreatorButton);

        dropdownMenuToggle(`${headerClassName}-nav`, appConfig, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEditProfileListener(appConfig, currentPage, HTMLElementsWithListeners);
        createProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printEventsList');
        toggleClass(main, mainClassName, `${mainClassName}-events`);

        const eventsList = createEventsList(main.className, testCards);
        main.appendChild(eventsList);

        createEventListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEventsFilter(header.className, appConfig, HTMLElementsWithListeners);

        const eventItems = Array.from(document.querySelectorAll(`.${main.className}-card`));
        createConfirmAttendanceListeners(appConfig, eventItems, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, 'printEventsList', appConfig, HTMLElementsWithListeners);
    }
};

export default printEventsList;