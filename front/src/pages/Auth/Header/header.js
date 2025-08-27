import createBackActionContent from '../../../components/Div/Back/back';
import createBackArrowIcon from '../../../components/Icon/Arrow/arrow';
import createBackHouseIcon from '../../../components/Icon/House/house';
import createLogo from '../../../components/Title/H1/Logo/logo';
import createLogoContent from '../../../components/Div/Logo/logo';

const createAuthHeaderContent = (appConfig, currentPage) => {
    const { headerClassName, solidIcon } = appConfig;
    const arrowClassNames = [solidIcon, 'fa-arrow-left'];
    const houseClassNames = [solidIcon, 'fa-house'];

    const authLogoContent = createLogoContent(`${headerClassName}-${currentPage}-logo-content`);

    const authBackContent = createBackActionContent(`${headerClassName}-${currentPage}-back-arrow-content`);
    authLogoContent.appendChild(authBackContent);

    const authBackArrowIcon = createBackArrowIcon(`${headerClassName}-${currentPage}-back-arrow-icon`);
    arrowClassNames.forEach(className => authBackArrowIcon.classList.add(className));
    authBackContent.appendChild(authBackArrowIcon);

    const authBackHouseIcon = createBackHouseIcon(`${headerClassName}-${currentPage}-back-house-icon`);
    houseClassNames.forEach(className => authBackHouseIcon.classList.add(className));
    authBackContent.appendChild(authBackHouseIcon);

    const authLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    authLogoContent.appendChild(authLogo);

    return authLogoContent;
};

export default createAuthHeaderContent;