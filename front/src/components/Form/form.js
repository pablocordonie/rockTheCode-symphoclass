import createNewTagTemplate from '../Tag/tag';

const createNewForm = (className) => createNewTagTemplate('form', className, { method: 'post' });

export default createNewForm;