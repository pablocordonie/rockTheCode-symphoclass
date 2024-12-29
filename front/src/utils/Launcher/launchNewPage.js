import activateListenersCleaner from '../Cleaner/listenersCleaner';
import adjustMainContentHeight from '../Height/adjustMainContentHeight';
import printLoader from '../Loader/printLoader';
import { renderApp } from '../../../main';

const launchNewPage = (appConfig, currentPage, HTMLElementsWithListeners, newPage) => {
    printLoader(appConfig);

    const HTMLElementsToClean = [...HTMLElementsWithListeners];
    activateListenersCleaner(HTMLElementsToClean);

    currentPage = newPage;
    renderApp(appConfig, currentPage, HTMLElementsWithListeners);
    adjustMainContentHeight(appConfig, currentPage);
};

export default launchNewPage;