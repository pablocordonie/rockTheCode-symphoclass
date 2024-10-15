import './userNavbar.css';
import dropdownBars from '../Icons/Bars/bars';
import dropdownMenu from '../Menu/dropdownMenu';
import userIcon from '../Icons/User/userIcon';

const createUserNavbar = (currentPage, userName) => `
    <nav class="sc-header-nav">
        <div class="sc-header-nav-user_info">
            ${userIcon()}
            <div class="sc-header-nav-user_name">${userName}</div>
        </div>
        ${dropdownBars()}
        ${dropdownMenu(currentPage)}
    </nav>
`;

export default createUserNavbar;