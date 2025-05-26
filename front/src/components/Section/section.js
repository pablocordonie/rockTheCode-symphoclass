import createNewTagTemplate from '../Tag/tag';

const createNewSection = (className, id = '') => createNewTagTemplate('section', className, { id });

export default createNewSection;