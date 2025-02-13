import './h3.css';
import createNewTagTemplate from '../../Tag/tag';

const createNewH3Title = (className, text) => createNewTagTemplate('h3', className, {}, text);

export default createNewH3Title;