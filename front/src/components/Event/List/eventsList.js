import './eventsList.css';
import createEventCard from '../Card/eventCard';
import createNoEventsMessage from '../No-Events/noEventsMessage';

const createEventsList = (mainClassName, testCards) => {
    const eventsList = document.createElement('ul');
    eventsList.className = `${mainClassName}-list`;

    if (!testCards.length) {
        const noEventsListItem = createNoEventsMessage(`${mainClassName}-no_events`, 'No hay eventos');
        eventsList.appendChild(noEventsListItem);
    } else {
        testCards.map(card => {
            const eventCardItem = createEventCard(`${mainClassName}-card`, card);
            eventsList.appendChild(eventCardItem);
        }).join('');
    }

    return eventsList;
};

export default createEventsList;