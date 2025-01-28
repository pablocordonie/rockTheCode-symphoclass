import createEditProfileForm from '../../../components/Form/EditProfileForm/editProfileForm';
import createLogoutListener from '../../../utils/Listeners/Menu/logoutListener';
import createNewForm from '../../../components/Form/form';
import createProfileListener from '../../../utils/Listeners/Menu/profileListener';
import createUpdateProfileListener from '../../../utils/Listeners/Profile/updateListener';
import createUserNavbar from '../../../components/Navbar/userNavbar';
import dropdownMenuToggle from '../../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../../utils/Error/errorHandler';
import querySelectorChecker from '../../../utils/QuerySelector/querySelectorChecker';

const printEditProfileForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printEditProfileForm');

        const headerNavbar = createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        dropdownMenuToggle(`${headerClassName}-nav`, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);
        createProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printEditProfileForm');

        const editProfileForm = createNewForm(`${mainClassName}-${currentPage}_form`, createEditProfileForm(`${mainClassName}-${currentPage}_form-fields`, currentPage));
        main.appendChild(editProfileForm);

        createUpdateProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, 'printEditProfileForm');
    }
};

export default printEditProfileForm;