import './eventCard.css';
import createButton from '../../Button/button';
import createCardTitle from '../../Title/H3/cardTitle';
import createNewParagraph from '../../Paragraph/paragraph';
import createTagTemplate from '../../Tag/tag';

const createEventCard = (className, card) => `
    <li class="${className}">
        ${createCardTitle(`${className}-title`, `${card.title}`)}
        ${createNewParagraph(`${className}-date`, `${card.date}`)}
        ${createNewParagraph(`${className}-center`, `${card.center}`)}
        ${createNewParagraph(`${className}-address`, `${card.address}`)}
        ${createTagTemplate('div', `${className}-options`, `${createButton('confirm-btn', 'Confirmar Asistencia')}`)}
    </li>
`;

export default createEventCard;