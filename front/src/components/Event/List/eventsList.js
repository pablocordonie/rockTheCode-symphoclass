import './eventsList.css';
import createNoEventsMessage from '../No-Events/noEventsMessage';
import createNewTagTemplate from '../../Tag/tag';

const createEventsList = (mainClassName, testCards) => {
    const eventsList = createNewTagTemplate('ul', `${mainClassName}-list`);

    if (!testCards.length) {
        const noEventsListItem = createNoEventsMessage(`${mainClassName}-no_events`, 'No hay eventos');
        eventsList.appendChild(noEventsListItem);
    } else {
        // TO-DO: Crear una lista de campos para la lista de eventos
    }

    return eventsList;
};

export default createEventsList;