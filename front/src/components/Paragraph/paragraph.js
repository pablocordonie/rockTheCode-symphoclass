import './paragraph.css';
import createNewTagTemplate from '../Tag/tag';

const createNewParagraph = (className, text, id) => createNewTagTemplate('p', className, { id }, text);

export default createNewParagraph;