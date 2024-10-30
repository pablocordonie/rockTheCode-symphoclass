import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchRegisterPage = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'register';
    renderApp(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
};

export default launchRegisterPage;