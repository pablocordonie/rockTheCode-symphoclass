import './eventCard.css';
import createNewH3Title from '../../Title/H3/h3';
import createConfirmedIcon from '../../Icon/Confirmed/confirmed';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createEventCard = (card, className) => {
    const eventCardItem = createNewTagTemplate('li', className, { dataId: card.id });

    if (card.confirmed) {
        eventCardItem.classList.add('confirmed');

        const confirmedIcon = createConfirmedIcon('confirm-btn-confirmed_icon');
        eventCardItem.appendChild(confirmedIcon);
    }

    const eventCardTitle = createNewH3Title(`${className}-title`, `${card.title}`);
    eventCardItem.appendChild(eventCardTitle);

    const dateParagraph = createNewParagraph(`${className}-date`, `${card.date}`);
    eventCardItem.appendChild(dateParagraph);

    const centerParagraph = createNewParagraph(`${className}-center`, `${card.center}`);
    eventCardItem.appendChild(centerParagraph);

    const addressParagraph = createNewParagraph(`${className}-address`, `${card.address}`);
    eventCardItem.appendChild(addressParagraph);

    const eventCardOption = createNewTagTemplate('div', `${className}-options`);
    const eventCardButton = createNewButton('confirm-btn', 'Confirmar Asistencia');
    eventCardOption.appendChild(eventCardButton);

    eventCardItem.appendChild(eventCardOption);
    return eventCardItem;
};

export default createEventCard;