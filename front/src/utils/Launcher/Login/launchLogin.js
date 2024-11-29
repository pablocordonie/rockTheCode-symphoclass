import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchLoginPage = (appConfig, currentPage, HTMLElements) => {
    printLoader(appConfig, HTMLElements);
    activateListenersCleaner(HTMLElements);

    currentPage = 'login';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchLoginPage;