import createEventCard from '../Card/eventCard';
import createNoEventsMessage from '../No-Events/noEventsMessage';
import recalculateBodyHeight from '../../../utils/Height/recalculateBodyHeight';

const createEventsList = (bodyHeight, main, testCards) => {
    const cardHeightInSvh = 40;

    if (!testCards.length) {
        main.innerHTML += createNoEventsMessage('sc-events-main-no_events', 'No hay eventos');
    } else if (testCards.length === 1) {
        main.innerHTML += createEventCard('sc-events-main-card', testCards[0]);
    } else if (testCards.length === 2) {
        testCards.forEach((card) => {
            bodyHeight += Math.round(cardHeightInSvh / 1.5);
            main.innerHTML += createEventCard('sc-events-main-card', card)
        });
    } else if (testCards.length >= 8) {
        testCards.forEach(card => {
            bodyHeight += cardHeightInSvh + (cardHeightInSvh / 8);
            main.innerHTML += createEventCard('sc-events-main-card', card)
        });
    } else {
        testCards.forEach((card) => {
            bodyHeight += cardHeightInSvh;
            main.innerHTML += createEventCard('sc-events-main-card', card)
        });
    }

    recalculateBodyHeight(bodyHeight);
};

export default createEventsList;