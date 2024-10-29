import './userNavbar.css';
import dropdownBars from '../Icons/Bars/bars';
import dropdownMenu from '../Menu/dropdownMenu';
import userIcon from '../Icons/User/userIcon';

const createUserNavbar = (className, currentPage, userName) => `
    <nav class="${className}">
        <div class="${className}-user_info">
            ${userIcon(`${className}-user_icon`)}
            <div class="${className}-user_name">${userName}</div>
        </div>
        ${dropdownBars(`${className}-user_options`)}
        ${dropdownMenu(`${className}-dropdown_menu`, currentPage)}
    </nav>
`;

export default createUserNavbar;