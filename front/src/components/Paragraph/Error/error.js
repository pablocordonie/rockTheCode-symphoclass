import './error.css';
import createNewParagraph from '../paragraph';

const createErrorNotificationMessage = (className, text) => createNewParagraph(className, text);

export default createErrorNotificationMessage;