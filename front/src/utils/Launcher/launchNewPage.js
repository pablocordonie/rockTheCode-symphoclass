import adjustMainContentHeight from '../Height/adjustMainContentHeight';
import printLoader from '../Loader/printLoader';
import { renderApp } from '../../../main';

const launchNewPage = (appConfig, currentPage, HTMLElementsWithListeners, newPage) => {
    printLoader(appConfig);

    currentPage = newPage;
    renderApp(appConfig, currentPage, HTMLElementsWithListeners);
    adjustMainContentHeight(appConfig, currentPage);
};

export default launchNewPage;