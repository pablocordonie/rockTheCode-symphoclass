import createAutoScrollToAnchor from '../../utils/Listeners/Scroll/scroll';
import createHomeFooter from './Footer/footer';
import createHomeHeader from './Header/header';
import createHomeLoginListener from '../../utils/Listeners/Home/Login/loginListener';
import createHomeMain from './Main/main';
import createHomeRegisterListener from '../../utils/Listeners/Home/Register/registerListener';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printHomePage = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printHomePage');

        const headerContent = createHomeHeader(appConfig, currentPage);
        header.appendChild(headerContent);

        const main = querySelectorChecker(`.${mainClassName}`, 'printHomePage');
        createHomeMain(main, appConfig, currentPage);

        const loginLink = querySelectorChecker(`.${headerClassName}-${currentPage}-menu-login_anchor`, 'printHomePage');
        createHomeLoginListener(loginLink, appConfig, currentPage, HTMLElementsWithListeners);

        const registerLink = querySelectorChecker(`.${mainClassName}-${currentPage}-cta-signup-btn`, 'printHomePage');
        createHomeRegisterListener(registerLink, appConfig, currentPage, HTMLElementsWithListeners);

        const footer = querySelectorChecker('footer', 'printHomePage');

        const footerContent = createHomeFooter(appConfig, currentPage);
        footer.appendChild(footerContent);

        createAutoScrollToAnchor(appConfig, HTMLElementsWithListeners);
    } catch (error) {
        return errorHandler(error, 'printHomePage', appConfig, HTMLElementsWithListeners);
    }
};

export default printHomePage;