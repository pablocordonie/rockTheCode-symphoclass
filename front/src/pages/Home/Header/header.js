import createHomeHeaderMenu from '../../../components/List/Home/Menu/menu';
import createHomeHeaderMenuItem from '../../../components/Item/Home/Menu/menu';
import createHomeHeaderNavItem from '../../../components/Item/Home/Nav/nav';
import createHomeHeaderNavItems from '../../../components/List/Home/Header/header';
import createHomeLogoContent from '../../../components/Anchor/Logo/logo';
import createHomeNav from '../../../components/Nav/Home/home';
import createLogo from '../../../components/Title/H1/Logo/logo';
import createHomeHeaderMenuAnchor from '../../../components/Anchor/Menu/menu';
import { homeHeaderMenuItems } from '../../../config/config';

const createHomeHeaderContent = (appConfig, currentPage) => {
    const { headerClassName } = appConfig;
    const headerNavItems = [];

    const homeHeaderNav = createHomeNav(`${headerClassName}-${currentPage}-nav`);

    const homeHeaderNavItems = createHomeHeaderNavItems(`${homeHeaderNav.className}-items`);
    homeHeaderNav.appendChild(homeHeaderNavItems);

    const homeLogoContent = createHomeLogoContent(`${headerClassName}-${currentPage}-logo-content`, '#main');
    headerNavItems.push(homeLogoContent);

    const homeLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    homeLogoContent.appendChild(homeLogo);

    const homeHeaderMenu = createHomeHeaderMenu(`${headerClassName}-${currentPage}-menu`);
    headerNavItems.push(homeHeaderMenu);

    headerNavItems.forEach(item => {
        const homeHeaderNavItem = createHomeHeaderNavItem(`${homeHeaderNav.className}-item`);
        homeHeaderNavItems.appendChild(homeHeaderNavItem);

        homeHeaderNavItem.appendChild(item);
    });

    for (const menuItem of homeHeaderMenuItems) {
        const homeHeaderMenuItem = createHomeHeaderMenuItem(`${homeHeaderMenu.className}-item`);
        homeHeaderMenu.appendChild(homeHeaderMenuItem);

        const homeHeaderMenuAnchor = createHomeHeaderMenuAnchor(`${homeHeaderMenu.className}-${menuItem.item}_anchor`, `#${menuItem.item}`);
        homeHeaderMenuAnchor.textContent = menuItem.title;
        homeHeaderMenuItem.appendChild(homeHeaderMenuAnchor);
    }

    return homeHeaderNav;
};

export default createHomeHeaderContent;