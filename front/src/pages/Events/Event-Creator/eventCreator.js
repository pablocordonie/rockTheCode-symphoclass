import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../utils/Cleaner/headerCleaner';
import createEventForm from '../../../templates/Form/EventForm/eventForm';
import createNewForm from '../../../templates/Form/form';
import createNewListener from '../../../utils/Listeners/Listener/createNewListener';
import createLogoutListener from '../../../utils/Listeners/Menu/logoutListener';
import createProfileListener from '../../../utils/Listeners/Menu/profileListener';
import createUserNavBar from '../../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../../utils/Toggle/dropdownMenuToggle';
import launchEventsPage from '../../../utils/Launcher/Events-List/launchEventsList';
import testCards from '../../../../testCards';

const printEventCreator = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const header = document.querySelector('.sc-header');
    header.innerHTML += createUserNavBar('sc-header-nav', currentPage, 'random_user');

    dropdownMenuToggle(HTMLElements);
    createLogoutListener(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    createProfileListener(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);

    const main = document.querySelector('.sc-main');
    main.innerHTML += createNewForm(`sc-main-${currentPage}_form`, `${createEventForm(`sc-main-${currentPage}_form-fields`, currentPage)}`);

    const createEventButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements.push(createEventButton);

            activateHeaderCleaner(header);
            activateContentCleaner(main);

            /* SIMULADOR DE CREACIÓN DE EVENTOS */
            const newEvent = {
                address: 'Calle Albasanz, 2, 28037 Madrid',
                center: 'Escuela de Música Joaquín Turina',
                date: '20 de Septiembre, 2025',
                title: `Evento ${testCards.length + 1}`,
            };
            testCards.push(newEvent);

            launchEventsPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-${currentPage}_button`),
        type: 'click'
    }
    const { callback, querySelector, type } = createEventButton;
    createNewListener(querySelector, callback, type);

    return main;
};

export default printEventCreator;