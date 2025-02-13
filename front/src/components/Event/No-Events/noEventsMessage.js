import './noEventsMessage.css';
import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createNoEventsMessage = (className, text) => {
    const noEventsMessageItem = createNewTagTemplate('li', className);

    const noEventsMessage = createNewParagraph(`${className}-message`, text);
    noEventsMessageItem.appendChild(noEventsMessage);

    return noEventsMessageItem;
};

export default createNoEventsMessage;