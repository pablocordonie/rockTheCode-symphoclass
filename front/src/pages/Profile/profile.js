import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewForm from '../../templates/Form/form';
import createProfileForm from '../../templates/Form/ProfileForm/profileForm';
import createUpdateProfileListener from '../../utils/Listeners/Profile/updateListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printProfileForm = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'printProfileForm', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
        header.innerHTML += createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');

        dropdownMenuToggle(`${headerClassName}-nav`, appConfig, HTMLElements);
        createLogoutListener(appConfig, currentPage, HTMLElements);

        const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'printProfileForm', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
        main.innerHTML += createNewForm(`${mainClassName}-${currentPage}_form`, `${createProfileForm(`${mainClassName}-${currentPage}_form-fields`, currentPage)}`);

        createUpdateProfileListener(appConfig, currentPage, HTMLElements);

        return main;
    } catch (error) {
        errorHandler(error, 'printProfileForm');
    }
};

export default printProfileForm;