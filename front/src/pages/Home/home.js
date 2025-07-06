import createAutoScrollToAnchor from '../../utils/Listeners/Scroll/scroll';
import createHomeFooterContent from './Footer/footer';
import createHomeHeaderContent from './Header/header';
import createHomeLoginListener from '../../utils/Listeners/Home/Login/login';
import createHomeMainContent from './Main/main';
import createHomeRegisterListener from '../../utils/Listeners/Home/Register/register';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printHomePage = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printHomePage');

        const headerContent = createHomeHeaderContent(appConfig, currentPage);
        header.appendChild(headerContent);

        createHomeMainContent(appConfig, currentPage);

        createHomeLoginListener(appConfig, currentPage, HTMLElementsWithListeners);
        createHomeRegisterListener(appConfig, currentPage, HTMLElementsWithListeners);

        const footer = querySelectorChecker('footer', 'printHomePage');

        const footerContent = createHomeFooterContent(appConfig, currentPage);
        footer.appendChild(footerContent);

        createAutoScrollToAnchor(appConfig, HTMLElementsWithListeners);
    } catch (error) {
        return errorHandler(error, 'printHomePage', appConfig, HTMLElementsWithListeners);
    }
};

export default printHomePage;