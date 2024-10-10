import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventsPage = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    printLoader(appId, footerClassName, loaderClassName, webContentClassName);
    HTMLElements.length >= 1 ? activateListenersCleaner(HTMLElements) : console.log('No hay elementos de HTML por eliminar');

    currentPage = 'events';
    renderApp(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
};

export default launchEventsPage;