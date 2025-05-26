import createHomeHeaderMenu from '../../../components/List/Menu/menu';
import createHomeHeaderMenuItem from '../../../components/Item/Menu/menu';
import createHomeLogoContent from '../../../components/Anchor/Logo/logo';
import createHomeNav from '../../../components/Nav/Home/home';
import createLogo from '../../../components/Title/H1/Logo/logo';
import createHomeHeaderMenuAnchor from '../../../components/Anchor/Menu/menu';
import { homeHeaderMenuItems } from '../../../config/config';

const createHomeHeader = (appConfig, currentPage) => {
    const { headerClassName } = appConfig;

    const homeHeaderNav = createHomeNav(`${headerClassName}-${currentPage}-nav`);

    const homeLogoContent = createHomeLogoContent(`${headerClassName}-${currentPage}-logo-content`, '#main');
    homeHeaderNav.appendChild(homeLogoContent);

    const homeLogo = createLogo(`${headerClassName}-logo`, 'The SymphoClass');
    homeLogoContent.appendChild(homeLogo);

    const homeHeaderMenu = createHomeHeaderMenu(`${headerClassName}-${currentPage}-menu`);
    homeHeaderNav.appendChild(homeHeaderMenu);

    for (const menuItem of homeHeaderMenuItems) {
        const homeHeaderMenuItem = createHomeHeaderMenuItem(`${homeHeaderMenu.className}-item`);
        homeHeaderMenu.appendChild(homeHeaderMenuItem);

        const homeHeaderMenuAnchor = createHomeHeaderMenuAnchor(`${homeHeaderMenu.className}-${menuItem.toLowerCase()}_anchor`, `#${menuItem.toLowerCase()}`);
        menuItem === 'About' ? homeHeaderMenuAnchor.textContent = `${menuItem} Us` : homeHeaderMenuAnchor.textContent = menuItem;
        homeHeaderMenuItem.appendChild(homeHeaderMenuAnchor);
    }

    return homeHeaderNav;
};

export default createHomeHeader;