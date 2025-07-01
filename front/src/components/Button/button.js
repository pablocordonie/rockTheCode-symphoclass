import createNewTagTemplate from '../Tag/tag';

const createNewButton = (className, text, id = '') => createNewTagTemplate('button', className, { id, type: 'button' }, text);

export default createNewButton;