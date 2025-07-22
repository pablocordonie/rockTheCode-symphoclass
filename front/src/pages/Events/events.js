import createConfirmAttendanceListeners from '../../utils/Listeners/Event/Confirm-Attendance/confirmAttendance';
import createEditProfileListener from '../../utils/Listeners/Menu/editProfile';
import createEventCreatorCloseListener from '../../utils/Listeners/Event/Event-Creator/Close/close';
import createEventImageListener from '../../utils/Listeners/Image/Event/event';
import createEventImageSelectorListener from '../../utils/Listeners/Event/Image/image';
import createEventsFilter from '../../utils/Listeners/Filter/eventsFilter';
import createEventsFooterContent from './Footer/footer';
import createEventsHeaderContent from './Header/header';
import createEventsMainContent from './Main/main';
import createLogoutListener from '../../utils/Listeners/Menu/logout';
import createNewEventCreator from '../../components/Event/event';
import createNewEventListener from '../../utils/Listeners/Event/Event-Creator/event';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenu';
import errorHandler from '../../utils/Error/errorHandler';
import eventCreatorListener from '../../utils/Toggle/eventCreator';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';
import testCards from '../../utils/Data/testCards';

const printEventsList = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { appId, footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'printEventsList';

    try {
        const appContent = querySelectorChecker(`#${appId}`, context);

        const eventCreator = createNewEventCreator(appConfig);
        appContent.insertAdjacentHTML('afterbegin', eventCreator.outerHTML);

        createEventCreatorCloseListener(appConfig, HTMLElementsWithListeners);
        createEventImageSelectorListener(appConfig, HTMLElementsWithListeners);
        createEventImageListener(appConfig, HTMLElementsWithListeners);
        createNewEventListener(appConfig, currentPage, HTMLElementsWithListeners);

        const header = querySelectorChecker(`.${headerClassName}`, context);
        header.classList.remove(`${headerClassName}-flex`);

        const headerContent = createEventsHeaderContent(appConfig, currentPage);
        header.appendChild(headerContent);

        eventCreatorListener(appConfig, currentPage, HTMLElementsWithListeners);
        dropdownMenuToggle(appConfig, currentPage, HTMLElementsWithListeners);
        createEditProfileListener(appConfig, currentPage, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, context);

        const eventsMainContent = createEventsMainContent(appConfig, currentPage, testCards);
        main.appendChild(eventsMainContent);

        createConfirmAttendanceListeners(appConfig, currentPage, HTMLElementsWithListeners);
        createEventsFilter(header.className, appConfig, currentPage, HTMLElementsWithListeners);

        const footer = querySelectorChecker(`.${footerClassName}`, context);
        footer.style.backgroundColor = 'var(--tsc-color-100)';

        const footerContent = createEventsFooterContent(appConfig, currentPage);
        footer.appendChild(footerContent);

        return main;
    } catch (error) {
        return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
    }
};

export default printEventsList;