import './eventsList.css';
import createEventCard from '../Card/eventCard';
import createNoEventsMessage from '../No-Events/noEventsMessage';
import createNewList from '../../../utils/List/list';
import createNewTagTemplate from '../../Tag/tag';

const createEventsList = (mainClassName, testCards) => {
    const eventsList = createNewTagTemplate('ul', `${mainClassName}-list`);

    if (!testCards.length) {
        const noEventsListItem = createNoEventsMessage(`${mainClassName}-no_events`, 'No hay eventos');
        eventsList.appendChild(noEventsListItem);
    } else {
        createNewList(eventsList, testCards, card => createEventCard(card, `${mainClassName}-card`));
    }

    return eventsList;
};

export default createEventsList;