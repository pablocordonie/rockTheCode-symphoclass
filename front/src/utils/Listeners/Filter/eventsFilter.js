import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import createEventsList from '../../../templates/Event/List/eventsList';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';

const createEventsFilter = (className, HTMLElements, main, testCards) => {
    const eventsInput = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, eventsInput);

            activateContentCleaner(main);

            if (testCards.length) {
                const filteredCards = testCards.filter(card => card.title.toLowerCase().includes(event.target.value));
                main.innerHTML = createEventsList(main.className, filteredCards);
            }
        },
        querySelector: document.querySelector(`.${className}-search`),
        type: 'input'
    };
    const { callback, querySelector, type } = eventsInput;

    createNewListener(querySelector, callback, type);
};

export default createEventsFilter;