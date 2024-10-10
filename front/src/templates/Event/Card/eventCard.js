import './eventCard.css';
import createTagTemplate from '../../Tag/tag';

const createEventCard = (className, card) => `
    <div class="${className}">
        ${createTagTemplate('h3', 'sc-events-main-card-title', `${card.title}`)}
        ${createTagTemplate('p', 'sc-events-main-card-date', `${card.date}`)}
        ${createTagTemplate('p', 'sc-events-main-card-center', `${card.center}`)}
        ${createTagTemplate('p', 'sc-events-main-card-address', `${card.address}`)}
        ${createTagTemplate('div', 'sc-events-main-card-options', `${createTagTemplate('button', 'confirm-btn', 'Confirmar Asistencia')}`)}
    </div>
`;

export default createEventCard;