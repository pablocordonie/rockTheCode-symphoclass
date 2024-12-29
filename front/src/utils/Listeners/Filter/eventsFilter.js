import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import createConfirmAttendanceListeners from '../Event/Confirm-Attendance/confirmAttendanceListeners';
import createEventsList from '../../../templates/Event/List/eventsList';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import testCards from '../../../../testCards';

const createEventsFilter = (className, appConfig, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;

    const eventsInput = {
        callback: (event) => {
            try {
                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, eventsInput);
                const main = querySelectorChecker(`.${mainClassName}-events`, 'createEventsFilter');
                activateContentCleaner(main);

                if (testCards.length) {
                    const filteredCards = testCards.filter(card => card.title.toLowerCase().includes(event.target.value));

                    const eventsList = createEventsList(main.className, filteredCards);
                    main.appendChild(eventsList);

                    const eventItems = Array.from(eventsList.querySelectorAll(`.${mainClassName}-events-card`));

                    if (eventItems.length === 0) {
                        return;
                    } else {
                        createConfirmAttendanceListeners(eventItems, HTMLElementsWithListeners);
                    }
                }
                return main;
            } catch (error) {
                return errorHandler(error, 'createEventsFilter');
            }
        },
        querySelector: querySelectorChecker(`.${className}-search-input`, 'createEventsFilter'),
        type: 'input'
    };
    const { callback, querySelector, type } = eventsInput;
    createNewListener(querySelector, callback, type);
};

export default createEventsFilter;