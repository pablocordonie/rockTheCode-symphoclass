import './input.css';
import createNewTagTemplate from '../Tag/tag';

const createNewInput = (className, id, name, placeholderText, type = 'text') => createNewTagTemplate('input', className, { id, name, placeholder: placeholderText, type });

export default createNewInput;