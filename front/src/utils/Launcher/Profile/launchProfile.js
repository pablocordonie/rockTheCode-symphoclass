import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchProfilePage = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'profile';
    renderApp(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
};

export default launchProfilePage;