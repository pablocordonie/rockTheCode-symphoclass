import './dropdownMenu.css';
import editProfileOption from './Edit-Profile/editProfile';
import logoutOption from './Logout/logoutOption';

const dropdownMenu = (className, currentPage) => `
    <ul class="${className}">
        ${currentPage === 'events' || currentPage === 'create-event' ? editProfileOption(`${className}-edit`, 'Cambiar Perfil') : ''}
        ${logoutOption(`${className}-logout`, 'Cerrar Sesión')}
    </ul>
`;

export default dropdownMenu;