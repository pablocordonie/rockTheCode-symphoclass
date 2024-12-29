import './dropdownMenu.css';
import createEditProfileOption from './EditProfile/editProfile';
import createLogoutOption from './Logout/logoutOption';

const createDropdownMenu = (className, currentPage) => {
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.className = `${className}`;

    if (currentPage === 'events' || currentPage === 'create_event') {
        const editProfileOption = createEditProfileOption(`${className}-edit`, 'Cambiar Perfil');
        dropdownMenu.appendChild(editProfileOption);
    }

    const logoutOption = createLogoutOption(`${className}-logout`, 'Cerrar Sesión');
    dropdownMenu.appendChild(logoutOption);

    return dropdownMenu;
};

export default createDropdownMenu;