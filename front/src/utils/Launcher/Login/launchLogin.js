import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchLoginPage = (appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'login';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchLoginPage;