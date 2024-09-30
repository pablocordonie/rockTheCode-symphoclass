import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchRegisterPage = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    if (currentPage !== 'login') {
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);
    }

    HTMLElements.length >= 1 ? activateListenersCleaner(HTMLElements) : console.log('No hay elementos de HTML por eliminar');

    currentPage = 'register';
    renderApp(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
};

export default launchRegisterPage;