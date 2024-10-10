import './noEventsMessage.css';
import createTagTemplate from '../../Tag/tag';

const createNoEventsMessage = (className, text) => createTagTemplate('div', `${className}`, `${createTagTemplate('p', `${className}-p`, `${text}`)}`);

export default createNoEventsMessage;