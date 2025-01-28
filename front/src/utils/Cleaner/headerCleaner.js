import activateContentCleaner from '../Cleaner/contentCleaner';
import createMainTitle from '../../components/Title/H1/mainTitle';

const activateHeaderCleaner = (header) => {
    activateContentCleaner(header);

    const mainTitle = createMainTitle('sc-header-h1', 'The SymphoClass');
    header.appendChild(mainTitle);

    return header;
};

export default activateHeaderCleaner;