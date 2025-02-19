import './input.css';
import createNewTagTemplate from '../Tag/tag';

const createNewInput = (className, id, placeholderText, type = 'text') => {
    const newInput = createNewTagTemplate('input', className, { id, placeholder: placeholderText, type });
    return newInput;
};

export default createNewInput;