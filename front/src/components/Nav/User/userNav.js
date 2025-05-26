import './userNav.css';
import createDropdownBars from '../../Icon/Bars/bars';
import createDropdownMenu from '../../Menu/dropdownMenu';
import createNewNav from '../nav';
import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';
import createUserIcon from '../../Icon/User/userIcon';

const createUserNavbar = (className, currentPage, userName) => {
    const userNavbar = createNewNav('nav', className);

    const userInfoContent = createNewTagTemplate('div', `${className}-user_info`);

    const userIconContent = createUserIcon(`${className}-user_icon`);
    userInfoContent.appendChild(userIconContent);

    const userNameParagraph = createNewParagraph(`${className}-user_name`, userName);
    userInfoContent.appendChild(userNameParagraph);
    userNavbar.appendChild(userInfoContent);

    const dropdownBarsContent = createDropdownBars(`${className}-user_options`);
    userNavbar.appendChild(dropdownBarsContent);

    const dropdownMenu = createDropdownMenu(`${className}-dropdown_menu`, currentPage);
    userNavbar.appendChild(dropdownMenu);

    return userNavbar;
};

export default createUserNavbar;