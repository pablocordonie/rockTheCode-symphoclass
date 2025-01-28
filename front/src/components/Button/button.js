import './button.css';
import createTagTemplate from '../Tag/tag';

const createNewButton = (className, text, type = 'button', id = '') => {
    const newButton = createTagTemplate('button', className, text, id, type);
    return newButton;
};

export default createNewButton;