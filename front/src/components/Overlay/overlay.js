import './overlay.css';
import createNewTagTemplate from '../Tag/tag';

const createHeroOverlay = (className) => createNewTagTemplate('div', className);

export default createHeroOverlay;