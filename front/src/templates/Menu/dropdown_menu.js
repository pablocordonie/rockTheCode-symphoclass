import './dropdown_menu.css';
import editProfileOption from './Edit-Profile/edit_profile';
import logoutOption from './Logout/logout_option';

const dropdownMenu = (currentPage) => `
    <ul class="sc-header-nav-dropdown_menu">
        ${currentPage === 'events' ? editProfileOption() : ''}
        ${logoutOption()}
    </ul>
`;

export default dropdownMenu;