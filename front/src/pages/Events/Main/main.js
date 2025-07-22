import createEventCard from '../../../components/Item/Events/Main/Card/card';
import createEventCardAddress from '../../../components/Paragraph/Events/Main/Address/address';
import createEventCardBtn from '../../../components/Button/Events/Main/Card/card';
import createEventCardCenter from '../../../components/Paragraph/Events/Main/Center/center';
import createEventCardDate from '../../../components/Paragraph/Events/Main/Date/date';
import createEventCardInfo from '../../../components/List/Events/Main/Info/info';
import createEventCardInfoItem from '../../../components/Item/Events/Main/Info/info';
import createEventCardTitle from '../../../components/Title/H3/Card/card';
import createEventsList from '../../../components/List/Events/Main/List/list';
import createEventsMessage from '../../../components/Paragraph/Events/Main/Message/message';
import createEventsMessageContent from '../../../components/Item/Events/Main/Message/message';

const createEventsMainContent = (appConfig, currentPage, testCards) => {
    const { mainClassName } = appConfig;
    let eventCardInfoItems = [];

    if (!testCards.length) {
        const noEventsMessageContainer = createEventsMessageContent(`${mainClassName}-${currentPage}-message-content`);

        const noEventsMessage = createEventsMessage(`${mainClassName}-${currentPage}-message`, 'No hay eventos');
        noEventsMessageContainer.appendChild(noEventsMessage);

        return noEventsMessageContainer;
    } else {
        const eventsList = createEventsList(`${mainClassName}-${currentPage}-list`);

        testCards.forEach(card => {
            const eventCard = createEventCard(`${mainClassName}-${currentPage}-card`, card.id);
            eventsList.appendChild(eventCard);

            if (card.confirmed) {
                eventCard.classList.add('confirmed');
            }

            const eventCardInfo = createEventCardInfo(`${eventCard.className}-info`);
            eventCard.appendChild(eventCardInfo);

            const eventCardTitle = createEventCardTitle(`${eventCardInfo.className}-title`, card.title);
            eventCardInfoItems.push(eventCardTitle);

            const eventCardDate = createEventCardDate(`${eventCardInfo.className}-date`, card.date);
            eventCardInfoItems.push(eventCardDate);

            const eventCardCenter = createEventCardCenter(`${eventCardInfo.className}-center`, card.center);
            eventCardInfoItems.push(eventCardCenter);

            const addressParagraph = createEventCardAddress(`${eventCardInfo.className}-address`, card.address);
            eventCardInfoItems.push(addressParagraph);

            const eventCardButton = createEventCardBtn(`${eventCard.className}-confirm-btn`, 'Confirmar Asistencia');
            eventCardInfoItems.push(eventCardButton);

            eventCardInfoItems.forEach(item => {
                const eventCardInfoItem = createEventCardInfoItem(`${eventCardInfo.className}-item`);
                eventCardInfo.appendChild(eventCardInfoItem);

                eventCardInfoItem.appendChild(item);
            });

            eventCardInfoItems = [];
        });

        return eventsList;
    }
};

export default createEventsMainContent;