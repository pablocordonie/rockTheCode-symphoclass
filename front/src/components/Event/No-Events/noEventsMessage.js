import './noEventsMessage.css';
import createNewParagraph from '../../Paragraph/paragraph';

const createNoEventsMessage = (className, text) => {
    const noEventsMessageItem = document.createElement('li');
    noEventsMessageItem.className = `${className}`;

    const noEventsMessage = createNewParagraph(`${className}-message`, text);
    noEventsMessageItem.appendChild(noEventsMessage);

    return noEventsMessageItem;
};

export default createNoEventsMessage;