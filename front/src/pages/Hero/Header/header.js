import createNewContainer from '../../../components/Div/div';
import createNewAnchor from '../../../components/Anchor/anchor';
import createNewH1Title from '../../../components/Title/H1/h1';
import createNewNav from '../../../components/Nav/nav';

const createHeroHeaderContent = (appConfig) => {
    const { headerClassName } = appConfig;

    const heroHeaderNav = createNewNav(`${headerClassName}-nav`);

    const heroHeaderTitleAnchor = createNewAnchor(`${headerClassName}-logo`, '#main');
    heroHeaderNav.appendChild(heroHeaderTitleAnchor);

    const heroHeaderTitle = createNewH1Title(`${headerClassName}-h1`, 'The SymphoClass');
    heroHeaderTitleAnchor.appendChild(heroHeaderTitle);

    const heroHeaderMenu = createNewContainer(`${headerClassName}-menu`);
    heroHeaderNav.appendChild(heroHeaderMenu);

    const menuItems = ['Features', 'Testimonials', 'About'/*, 'Login'*/];
    for (const menuItem of menuItems) {
        let heroHeaderMenuAnchor = createNewAnchor(`${heroHeaderMenu.className}-${menuItem.toLowerCase()}_anchor`, `#${menuItem.toLowerCase()}`);
        menuItem === 'About' ? heroHeaderMenuAnchor.textContent = `${menuItem} Us` : heroHeaderMenuAnchor.textContent = menuItem;
        heroHeaderMenu.appendChild(heroHeaderMenuAnchor);
    }

    return heroHeaderNav;
};

export default createHeroHeaderContent;