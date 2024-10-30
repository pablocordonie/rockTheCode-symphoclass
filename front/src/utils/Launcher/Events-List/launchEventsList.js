import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventsPage = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'events';
    renderApp(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
};

export default launchEventsPage;