import './input.css';
import createNewTagTemplate from '../Tag/tag';

const createNewInput = (className, id, placeholderText, type = 'text') => createNewTagTemplate('input', className, { id, placeholder: placeholderText, type });

export default createNewInput;