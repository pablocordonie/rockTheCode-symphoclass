import './mainTitle.css';
import createTagTemplate from '../../Tag/tag';

const createMainTitle = (className, text) => createTagTemplate('h1', className, text);

export default createMainTitle;