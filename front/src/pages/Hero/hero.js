import createHeroFooterContent from './Footer/footer';
import createHeroHeaderContent from './Header/header';
import createHeroLoginListener from '../../utils/Listeners/Hero/Login/loginListener';
import createHeroMainContent from './Main/main';
import createHeroRegisterListener from '../../utils/Listeners/Hero/Register/registerListener';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';
import scrollToAnchor from '../../utils/Listeners/Scroll/scroll';

const printHeroPage = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printHeroPage');

        const headerContent = createHeroHeaderContent(appConfig, currentPage);
        header.appendChild(headerContent);

        const main = querySelectorChecker(`.${mainClassName}`, 'printHeroPage');

        const mainContent = createHeroMainContent(appConfig, currentPage);
        main.appendChild(mainContent);

        const loginLink = querySelectorChecker(`.${headerClassName}-${currentPage}-menu-login_anchor`, 'printHeroPage');
        createHeroLoginListener(loginLink, appConfig, currentPage, HTMLElementsWithListeners);

        const registerLink = querySelectorChecker(`.${mainClassName}-${currentPage}-cta-signup_button`, 'printHeroPage');
        createHeroRegisterListener(registerLink, appConfig, currentPage, HTMLElementsWithListeners);

        const footer = querySelectorChecker('footer', 'printHeroPage');

        const footerContent = createHeroFooterContent(appConfig);
        footer.appendChild(footerContent);

        scrollToAnchor(appConfig, HTMLElementsWithListeners);
    } catch (error) {
        return errorHandler(error, 'printHeroPage', appConfig, HTMLElementsWithListeners);
    }
};

export default printHeroPage;