import './button.css';
import createNewTagTemplate from '../Tag/tag';

const createNewButton = (className, text, id = '') => {
    const newButton = createNewTagTemplate('button', className, { id, type: 'button' }, text);
    return newButton;
};

export default createNewButton;