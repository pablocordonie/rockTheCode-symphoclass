import './anchor.css';
import createNewTagTemplate from '../Tag/tag';

const createNewAnchor = (className, hrefText) => createNewTagTemplate('a', className, { href: hrefText });

export default createNewAnchor;