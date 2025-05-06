import createHeroFooterContent from './Footer/footer';
import createHeroHeaderContent from './Header/header';
import createHeroMainContent from './Main/main';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printHeroPage = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printHeroPage');

        const headerContent = createHeroHeaderContent(appConfig);
        header.appendChild(headerContent);

        const main = querySelectorChecker(`.${mainClassName}`, 'printHeroPage');

        const mainContent = createHeroMainContent(appConfig, currentPage);
        main.appendChild(mainContent);

        // const footer = querySelectorChecker('footer', 'printHeroPage');

        // const footerContent = createHeroFooterContent(appConfig);
        // footer.appendChild(footerContent);
    } catch (error) {
        return errorHandler(error, 'printHeroPage', appConfig, HTMLElementsWithListeners);
    }
};

export default printHeroPage;