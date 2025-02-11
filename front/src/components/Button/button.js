import './button.css';
import createTagTemplate from '../Tag/tag';

const createNewButton = (className, text, id = '') => {
    const newButton = createTagTemplate('button', className, text, id, 'button');
    return newButton;
};

export default createNewButton;