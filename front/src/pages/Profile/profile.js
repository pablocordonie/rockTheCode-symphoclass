import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createEditProfileListener from '../../utils/Listeners/Menu/editProfileListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printProfileForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printProfileForm');

        const headerNavbar = createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        dropdownMenuToggle(`${headerClassName}-nav`, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEditProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printProfileForm');

        /* Crear una vista de perfil actual del usuario que haya iniciado sesión previamente */

        return main;
    } catch (error) {
        return errorHandler(error, 'printProfileForm');
    }
};

export default printProfileForm;