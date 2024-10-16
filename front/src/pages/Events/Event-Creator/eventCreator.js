import './eventCreator.css';
import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../utils/Cleaner/headerCleaner';
import createEventForm from '../../../templates/Form/EventForm/eventForm';
import createNewForm from '../../../templates/Form/form';
import createNewListener from '../../../utils/Listeners/Listener/createNewListener';
import createLogoutListener from '../../../utils/Listeners/Menu/logoutListener';
import createUserNavBar from '../../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../../utils/Toggle/dropdownMenuToggle';
import launchEventsPage from '../../../utils/Launcher/Events-List/launchEventsList';
import recalculateBodyHeight from '../../../utils/Height/recalculateBodyHeight';

const printEventCreator = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const header = document.querySelector('.sc-header');
    header.innerHTML += createUserNavBar(currentPage, 'random_user');

    dropdownMenuToggle(HTMLElements);
    createLogoutListener(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);

    const main = document.querySelector('.sc-main');
    activateContentCleaner(main);
    main.innerHTML += createNewForm(`sc-main-${currentPage}_form`, `${createEventForm(`sc-main-${currentPage}_form-fields`, currentPage)}`);

    const createEventButton = {
        callback: (event) => {
            event.preventDefault();

            bodyHeight = 310;
            recalculateBodyHeight(bodyHeight);

            HTMLElements.push(createEventButton);

            activateHeaderCleaner(header);
            activateContentCleaner(main);

            launchEventsPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector(`.sc-main-${currentPage}_form-button`),
        type: 'click'
    }
    const { callback, querySelector, type } = createEventButton;
    createNewListener(querySelector, callback, type);

    return main;
};

export default printEventCreator;