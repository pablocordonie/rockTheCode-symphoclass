import './dropdownMenu.css';
import createEditProfileOption from './EditProfile/editProfile';
import createLogoutOption from './Logout/logoutOption';
import createMyProfileOption from './Profile/myProfile';
import createNewTagTemplate from '../Tag/tag';

const createDropdownMenu = (className, currentPage) => {
    const dropdownMenu = createNewTagTemplate('ul', className);

    if (currentPage === 'events' || currentPage === 'create_event' || currentPage === 'edit_profile') {
        const myProfileOption = createMyProfileOption(`${className}-profile`, 'Mi Perfil');
        dropdownMenu.appendChild(myProfileOption);
    }

    if (currentPage === 'events' || currentPage === 'create_event') {
        const editProfileOption = createEditProfileOption(`${className}-edit`, 'Cambiar Perfil');
        dropdownMenu.appendChild(editProfileOption);
    }

    const logoutOption = createLogoutOption(`${className}-logout`, 'Cerrar Sesión');
    dropdownMenu.appendChild(logoutOption);

    return dropdownMenu;
};

export default createDropdownMenu;