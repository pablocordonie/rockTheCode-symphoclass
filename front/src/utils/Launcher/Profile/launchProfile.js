import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchProfilePage = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);

    HTMLElements.length >= 1 ? activateListenersCleaner(HTMLElements) : console.log('No hay elementos de HTML por eliminar');

    currentPage = 'profile';
    renderApp(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
};

export default launchProfilePage;