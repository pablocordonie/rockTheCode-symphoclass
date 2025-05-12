import './div.css';
import createNewTagTemplate from '../Tag/tag';

const createNewContainer = (className) => createNewTagTemplate('div', className);

export default createNewContainer;