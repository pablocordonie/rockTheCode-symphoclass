import './userNavbar.css';
import createDropdownBars from '../Icons/Bars/bars';
import createDropdownMenu from '../Menu/dropdownMenu';
import createUserIcon from '../Icons/User/userIcon';

const createUserNavbar = (className, currentPage, userName) => {
    const userNavbar = document.createElement('nav');
    userNavbar.className = `${className}`;

    const userInfoContainer = document.createElement('div');
    userInfoContainer.className = `${className}-user_info`;

    const userIconContainer = createUserIcon(`${className}-user_icon`);
    userInfoContainer.appendChild(userIconContainer);

    const userNameParagraph = document.createElement('p');
    userNameParagraph.className = `${className}-user_name`;
    userNameParagraph.textContent = `${userName}`;
    userInfoContainer.appendChild(userNameParagraph);
    userNavbar.appendChild(userInfoContainer);

    const dropdownBarsContainer = createDropdownBars(`${className}-user_options`);
    userNavbar.appendChild(dropdownBarsContainer);

    const dropdownMenu = createDropdownMenu(`${className}-dropdown_menu`, currentPage);
    userNavbar.appendChild(dropdownMenu);

    return userNavbar;
};

export default createUserNavbar;