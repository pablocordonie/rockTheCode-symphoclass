import './userNavbar.css';
import createDropdownBars from '../../Icon/Bars/bars';
import createDropdownMenu from '../../Menu/dropdownMenu';
import createNewNav from '../nav';
import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';
import createUserIcon from '../../Icon/User/userIcon';

const createUserNavbar = (className, currentPage, userName) => {
    const userNavbar = createNewNav('nav', className);

    const userInfoContainer = createNewTagTemplate('div', `${className}-user_info`);

    const userIconContainer = createUserIcon(`${className}-user_icon`);
    userInfoContainer.appendChild(userIconContainer);

    const userNameParagraph = createNewParagraph(`${className}-user_name`, userName);
    userInfoContainer.appendChild(userNameParagraph);
    userNavbar.appendChild(userInfoContainer);

    const dropdownBarsContainer = createDropdownBars(`${className}-user_options`);
    userNavbar.appendChild(dropdownBarsContainer);

    const dropdownMenu = createDropdownMenu(`${className}-dropdown_menu`, currentPage);
    userNavbar.appendChild(dropdownMenu);

    return userNavbar;
};

export default createUserNavbar;