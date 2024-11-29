//import createConfirmAttendanceListeners from '';
import createButton from '../../templates/Button/button';
import createEventsFilter from '../../utils/Listeners/Filter/eventsFilter';
import createEventsList from '../../templates/Event/List/eventsList';
import createEventListener from '../../utils/Listeners/Event/eventListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewInput from '../../templates/Input/input';
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';
import testCards from '../../../testCards';
import toggleClass from '../../utils/Toggle/toggleClass';

const printEventsList = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'printEventsList', `El HTMLElement de className .${headerClassName} no ha podido ser encontrado`, HTMLElements);
        toggleClass(header, `${headerClassName}-events`, currentPage);
        header.innerHTML += createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.innerHTML += createNewInput(`${header.className}-search`, 'text', '', 'Buscar eventos...');
        header.innerHTML += createButton(`${header.className}-create_btn`, 'Crear Nuevo Evento');

        dropdownMenuToggle(`${headerClassName}-nav`, appConfig, HTMLElements);
        createLogoutListener(appConfig, currentPage, HTMLElements);
        createProfileListener(appConfig, currentPage, HTMLElements);

        const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'printEventsList', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
        toggleClass(main, `${mainClassName}-events`, currentPage);
        main.innerHTML += createEventsList(main.className, testCards);

        createEventListener(appConfig, currentPage, HTMLElements);
        createEventsFilter(header.className, appConfig, HTMLElements);
        /* Hay que crear un listener de confirmación de asistencia por cada evento mostrado en la lista de eventos */
        //createConfirmAttendanceListeners(HTMLElements);

        return main;
    } catch (error) {
        errorHandler(error, 'printEventsList');
    }
};

export default printEventsList;