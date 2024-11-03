import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchRegisterPage = (appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'register';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchRegisterPage;