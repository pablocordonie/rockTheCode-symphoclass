import createNoEventsMessage from '../../No-Events/noEventsMessage';
import createEventCard from '../../Card/eventCard';

const createEventListItems = (mainClassName, testCards) => {
    if (!testCards.length) {
        return createNoEventsMessage(`${mainClassName}-no_events`, 'No hay eventos');
    } else {
        return testCards.map(card => createEventCard(`${mainClassName}-card`, card)).join('');
    }
};

export default createEventListItems;