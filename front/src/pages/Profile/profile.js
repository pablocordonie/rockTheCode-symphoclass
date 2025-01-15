import createEditProfileListener from '../../utils/Listeners/Menu/editProfileListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import createUserProfileInfo from '../../templates/Profile/userProfile';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printUserProfile = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printUserProfile');

        const headerNavbar = createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        dropdownMenuToggle(`${headerClassName}-nav`, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printUserProfile');

        const userProfileInfo = createUserProfileInfo(appConfig, currentPage);
        main.appendChild(userProfileInfo);

        createEditProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, 'printUserProfile');
    }
};

export default printUserProfile;