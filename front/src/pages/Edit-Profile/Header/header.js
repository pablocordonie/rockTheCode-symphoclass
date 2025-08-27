import createBackActionContent from '../../../components/Div/Back/back';
import createBackArrowIcon from '../../../components/Icon/Arrow/arrow';
import createBackHouseIcon from '../../../components/Icon/House/house';
import createLogo from '../../../components/Title/H1/Logo/logo';
import createLogoContent from '../../../components/Div/Logo/logo';

const createEditProfileHeaderContent = (appConfig, currentPage) => {
    const { headerClassName, solidIcon } = appConfig;
    const arrowClassNames = [solidIcon, 'fa-arrow-left'];
    const houseClassNames = [solidIcon, 'fa-house'];

    const editProfileLogoContent = createLogoContent(`${headerClassName}-logo-content`);

    const editProfileBackContent = createBackActionContent(`${headerClassName}-${currentPage}-back-arrow-content`);
    editProfileLogoContent.appendChild(editProfileBackContent);

    const editProfileBackArrowIcon = createBackArrowIcon(`${headerClassName}-${currentPage}-back-arrow-icon`);
    arrowClassNames.forEach(className => editProfileBackArrowIcon.classList.add(className));
    editProfileBackContent.appendChild(editProfileBackArrowIcon);

    const editProfileBackHouseIcon = createBackHouseIcon(`${headerClassName}-${currentPage}-back-house-icon`);
    houseClassNames.forEach(className => editProfileBackHouseIcon.classList.add(className));
    editProfileBackContent.appendChild(editProfileBackHouseIcon);

    const editProfileLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    editProfileLogoContent.appendChild(editProfileLogo);

    return editProfileLogoContent;
};

export default createEditProfileHeaderContent;