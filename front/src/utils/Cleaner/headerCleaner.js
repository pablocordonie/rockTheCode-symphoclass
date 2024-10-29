import activateContentCleaner from '../Cleaner/contentCleaner';
import createMainTitle from '../../templates/Title/H1/mainTitle';

const activateHeaderCleaner = (header) => {
    activateContentCleaner(header);
    header.innerHTML += createMainTitle('sc-header-h1', 'The SymphoClass');
    return header;
};

export default activateHeaderCleaner;