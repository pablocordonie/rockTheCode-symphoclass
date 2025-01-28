import './profileTitle.css';
import createTagTemplate from '../../Tag/tag';

const createProfileTitle = (className, text) => createTagTemplate('h2', className, text);

export default createProfileTitle;