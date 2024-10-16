import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import createEventsList from '../../../templates/Event/List/eventsList';
import createNewListener from '../Listener/createNewListener';

const createEventsFilter = (bodyHeight, className, HTMLElements, main, testCards) => {
    const eventsInput = {
        callback: (event) => {
            HTMLElements.push(eventsInput);
            activateContentCleaner(main);

            if (testCards.length) {
                const filteredCards = testCards.filter(card => card.title.toLowerCase().includes(event.target.value));
                createEventsList(bodyHeight, main, filteredCards);
            }
        },
        querySelector: document.querySelector(`.${className}`),
        type: 'input'
    };
    const { callback, querySelector, type } = eventsInput;

    createNewListener(querySelector, callback, type);
};

export default createEventsFilter;