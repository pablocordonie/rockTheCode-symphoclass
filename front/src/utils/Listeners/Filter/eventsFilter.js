import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
// import createConfirmAttendanceListeners from '../Event/Confirm-Attendance/confirmAttendance';
import createEventsMainContent from '../../../pages/Events/Main/main';
import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createEventsFilter = (headerClassName, appConfig, currentPage, eventsResponse, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createEventsFilter';

    const callback = event => {
        try {
            const main = querySelectorChecker(`.${mainClassName}`, context);
            activateContentCleaner(main);

            if (eventsResponse) {
                const filteredCards = eventsResponse.filter(card => card.title.toLowerCase().includes(event.target.value));

                const eventsMainContent = createEventsMainContent(appConfig, currentPage, filteredCards);
                main.appendChild(eventsMainContent);

                const eventCards = Array.from(eventsMainContent.querySelectorAll(`.${mainClassName}-events-card`));

                if (eventCards) {
                    // createConfirmAttendanceListeners(appConfig, currentPage, HTMLElementsWithListeners);
                }
            }
            return main;
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const eventsFilter = createListenerConstructor(`.${headerClassName}-events-nav-search-input`, context, callback, 'input');

    createNewListener(eventsFilter, appConfig, HTMLElementsWithListeners, context);
};

export default createEventsFilter;