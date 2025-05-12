import './h4.css';
import createNewTagTemplate from '../../Tag/tag';

const createNewH4Title = (className, text) => createNewTagTemplate('h4', className, {}, text);

export default createNewH4Title;