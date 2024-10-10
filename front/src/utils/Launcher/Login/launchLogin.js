import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchLoginPage = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    if (currentPage !== 'register') {
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);
    }

    HTMLElements.length >= 1 ? activateListenersCleaner(HTMLElements) : console.log('No hay elementos de HTML por eliminar');

    currentPage = 'login';
    renderApp(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
};

export default launchLoginPage;