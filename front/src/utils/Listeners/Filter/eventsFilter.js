import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import createConfirmAttendanceListeners from '../Event/Confirm-Attendance/confirmAttendanceListeners';
import createEventsList from '../../../components/Event/List/eventsList';
import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import testCards from '../../Data/testCards';

const createEventsFilter = (className, appConfig, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createEventsFilter';

    const callback = event => {
        try {
            const main = querySelectorChecker(`.${mainClassName}-events`, context);
            activateContentCleaner(main);

            if (testCards.length) {
                const filteredCards = testCards.filter(card => card.title.toLowerCase().includes(event.target.value));

                const eventsList = createEventsList(main.className, filteredCards);
                main.appendChild(eventsList);

                const eventItems = Array.from(eventsList.querySelectorAll(`.${mainClassName}-events-card`));

                if (eventItems.length === 0) {
                    return;
                } else {
                    createConfirmAttendanceListeners(appConfig, eventItems, HTMLElementsWithListeners);
                }
            }
            return main;
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const eventsFilter = createListenerConstructor(`.${className}-search_input`, context, callback, 'input');

    createNewListener(eventsFilter, appConfig, HTMLElementsWithListeners, context);
};

export default createEventsFilter;