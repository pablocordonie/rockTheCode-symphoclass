import activateContentCleaner from '../Cleaner/contentCleaner';
import createMainTitle from '../../templates/Title/title';

const activateHeaderCleaner = (header) => {
    activateContentCleaner(header);
    header.innerHTML += createMainTitle();
    return header;
};

export default activateHeaderCleaner;