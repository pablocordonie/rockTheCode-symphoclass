import activateContentCleaner from './contentCleaner';
import activateHeaderCleaner from './headerCleaner';

const activatePageCleaner = (header, main) => {
    activateHeaderCleaner(header);
    activateContentCleaner(main);
};

export default activatePageCleaner;