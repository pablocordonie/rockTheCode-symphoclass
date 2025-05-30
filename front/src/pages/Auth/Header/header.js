import createLogo from '../../../components/Title/H1/Logo/logo';

const createAuthHeaderContent = (headerSelector, appConfig) => {
    const { headerClassName } = appConfig;

    const mainTitle = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    headerSelector.appendChild(mainTitle);
};

export default createAuthHeaderContent;