import './noEventsMessage.css';
import createNewParagraph from '../../Paragraph/paragraph';
import createTagTemplate from '../../Tag/tag';

const createNoEventsMessage = (className, text) => createTagTemplate('li', className, `${createNewParagraph(`${className}-p`, text)}`);

export default createNoEventsMessage;