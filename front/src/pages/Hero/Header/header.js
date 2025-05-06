import createHeroNavbar from '../../../components/Nav/HeroNavbar/heroNavbar';
import createNewAnchor from '../../../components/Anchor/anchor';
import createNewH1Title from '../../../components/Title/H1/h1';
import createNewTagTemplate from '../../../components/Tag/tag';

const createHeroHeaderContent = (appConfig) => {
    const { headerClassName } = appConfig;

    const heroHeaderNav = createHeroNavbar(`${headerClassName}-nav`);

    const heroHeaderTitleAnchor = createNewAnchor(`${headerClassName}-logo`, '#main');
    heroHeaderNav.appendChild(heroHeaderTitleAnchor);

    const heroHeaderTitle = createNewH1Title(`${headerClassName}-h1`, 'The SymphoClass');
    heroHeaderTitleAnchor.appendChild(heroHeaderTitle);

    const heroHeaderMenu = createNewTagTemplate('div', `${headerClassName}-menu`);
    const { heroHeaderMenuClassName } = heroHeaderMenu
    heroHeaderNav.appendChild(heroHeaderMenu);

    const menuItems = ['Features', 'Testimonials', 'About', 'Login'];
    for (const menuItem of menuItems) {
        let heroHeaderMenuAnchor = createNewAnchor(`${heroHeaderMenuClassName}-anchor`, `#${menuItem.toLowerCase()}`);
        menuItem === 'About' ? heroHeaderMenuAnchor.textContent = `${menuItem} Us` : heroHeaderMenuAnchor.textContent = menuItem;
        if (menuItem === 'Login') {
            heroHeaderMenuAnchor.classList.add(`${heroHeaderMenuClassName}-login`);
        }
        heroHeaderMenu.appendChild(heroHeaderMenuAnchor);
    }

    return heroHeaderNav;
};

export default createHeroHeaderContent;