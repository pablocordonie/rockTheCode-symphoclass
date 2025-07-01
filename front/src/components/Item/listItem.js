import createNewTagTemplate from '../Tag/tag';

const createNewListItem = (className, dataId = '') => createNewTagTemplate('li', className, { dataId });

export default createNewListItem;