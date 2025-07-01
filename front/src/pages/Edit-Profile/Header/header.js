import createLogo from '../../../components/Title/H1/Logo/logo';
import createLogoContent from '../../../components/Div/Logo/logo';

const createEditProfileHeaderContent = (appConfig) => {
    const { headerClassName } = appConfig;

    const editProfileLogoContent = createLogoContent(`${headerClassName}-logo-content`);

    const editProfileLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    editProfileLogoContent.appendChild(editProfileLogo);

    return editProfileLogoContent;
};

export default createEditProfileHeaderContent;