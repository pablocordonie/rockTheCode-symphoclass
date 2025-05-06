import './hero.css';
import createNewTagTemplate from '../Tag/tag';

const createHeroContent = (className) => createNewTagTemplate('div', className);

export default createHeroContent;