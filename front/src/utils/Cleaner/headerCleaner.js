import activateContentCleaner from '../Cleaner/contentCleaner';
import createNewH1Title from '../../components/Title/H1/h1';

const activateHeaderCleaner = (header) => {
    activateContentCleaner(header);

    const mainTitle = createNewH1Title('tsc-header-h1', 'The SymphoClass');
    header.appendChild(mainTitle);

    return header;
};

export default activateHeaderCleaner;