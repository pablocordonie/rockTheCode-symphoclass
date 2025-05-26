import activateContentCleaner from '../Cleaner/contentCleaner';
import createLogo from '../../components/Title/H1/Logo/logo';

const activateHeaderCleaner = (header, appConfig) => {
    const { headerClassName } = appConfig;

    activateContentCleaner(header);

    const mainTitle = createLogo(`${headerClassName}-h1`, 'The SymphoClass');
    header.appendChild(mainTitle);

    return header;
};

export default activateHeaderCleaner;