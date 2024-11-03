import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchProfilePage = (appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'profile';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchProfilePage;