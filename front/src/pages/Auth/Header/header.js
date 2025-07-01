import createLogo from '../../../components/Title/H1/Logo/logo';
import createLogoContent from '../../../components/Div/Logo/logo';

const createAuthHeaderContent = (appConfig) => {
    const { headerClassName } = appConfig;

    const authLogoContent = createLogoContent(`${headerClassName}-logo-content`);

    const authLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    authLogoContent.appendChild(authLogo);

    return authLogoContent;
};

export default createAuthHeaderContent;