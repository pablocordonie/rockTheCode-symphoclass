import './eventCard.css';
import createCardTitle from '../../Title/H3/cardTitle';
import createConfirmedIcon from '../../Icons/Confirmed/confirmed';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';
import createTagTemplate from '../../Tag/tag';

const createEventCard = (className, card) => {
    const eventCardItem = document.createElement('li');
    eventCardItem.className = `${className}`;
    eventCardItem.setAttribute('data-id', `${card.id}`);

    if (card.confirmed) {
        eventCardItem.classList.add('confirmed');

        const confirmedIcon = createConfirmedIcon('confirm-btn-confirmed_icon');
        eventCardItem.appendChild(confirmedIcon);
    }

    const eventCardTitle = createCardTitle(`${className}-title`, `${card.title}`);
    eventCardItem.appendChild(eventCardTitle);

    const dateParagraph = createNewParagraph(`${className}-date`, `${card.date}`);
    eventCardItem.appendChild(dateParagraph);

    const centerParagraph = createNewParagraph(`${className}-center`, `${card.center}`);
    eventCardItem.appendChild(centerParagraph);

    const addressParagraph = createNewParagraph(`${className}-address`, `${card.address}`);
    eventCardItem.appendChild(addressParagraph);

    const eventCardOption = createTagTemplate('div', `${className}-options`);
    const eventCardButton = createNewButton('confirm-btn', 'Confirmar Asistencia');
    eventCardOption.appendChild(eventCardButton);

    eventCardItem.appendChild(eventCardOption);
    return eventCardItem;
};

export default createEventCard;