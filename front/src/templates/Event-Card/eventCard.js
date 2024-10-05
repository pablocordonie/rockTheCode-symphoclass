import './eventCard.css';
import createTagTemplate from '../Tag/tag';
import createEventOptions from './Event-Options/eventOptions';

const createEventCard = (className) => `
    <div class="${className}">
        ${createTagTemplate('h3', 'sc-events-main-card-title', 'Evento 1')}
        ${createTagTemplate('p', 'sc-events-main-card-date', '20 de Agosto, 2025')}
        ${createTagTemplate('p', 'sc-events-main-card-institution', 'Escuela de Música Creativa')}
        ${createTagTemplate('p', 'sc-events-main-card-address', 'Calle de la Palma, 35, 28004 Madrid')}
        ${createEventOptions('sc-events-main-card-options')}
    </div>
`;

export default createEventCard;