import createNewTagTemplate from '../../Tag/tag';

const createNewH2Title = (className, text) => createNewTagTemplate('h2', className, {}, text);

export default createNewH2Title;