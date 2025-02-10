import './eventsList.css';
import createEventCard from '../Card/eventCard';
import createNoEventsMessage from '../No-Events/noEventsMessage';
import generateList from '../../../utils/List/generateList';

const createEventsList = (mainClassName, testCards) => {
    const eventsList = document.createElement('ul');
    eventsList.className = `${mainClassName}-list`;

    if (!testCards.length) {
        const noEventsListItem = createNoEventsMessage(`${mainClassName}-no_events`, 'No hay eventos');
        eventsList.appendChild(noEventsListItem);
    } else {
        generateList(eventsList, testCards, card => createEventCard(card, `${mainClassName}-card`));
    }

    return eventsList;
};

export default createEventsList;