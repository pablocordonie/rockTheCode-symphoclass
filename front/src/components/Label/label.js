import './label.css';
import createNewTagTemplate from '../Tag/tag';

const createNewLabel = (className, forText, text) => createNewTagTemplate('label', className, { for: forText }, text);

export default createNewLabel;