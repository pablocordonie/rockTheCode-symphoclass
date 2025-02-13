import './h1.css';
import createNewTagTemplate from '../../Tag/tag';

const createNewH1Title = (className, text) => createNewTagTemplate('h1', className, {}, text);

export default createNewH1Title;