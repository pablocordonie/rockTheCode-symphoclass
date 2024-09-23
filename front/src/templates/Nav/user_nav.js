import './user_nav.css';
import dropdownBars from '../Icons/Bars/bars';
import dropdownMenu from '../Menu/dropdown_menu';
import userIcon from '../Icons/User/user_icon';

const createNewUserNav = (currentPage, userName) => `
    <nav class="sc-header-nav">
        <div class="sc-header-nav-user_info">
            ${userIcon()}
            <div class="sc-header-nav-user_name">${userName}</div>
        </div>
        ${dropdownBars()}
        ${dropdownMenu(currentPage)}
    </nav>
`;

export default createNewUserNav;