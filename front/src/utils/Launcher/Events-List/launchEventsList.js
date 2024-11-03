import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventsPage = (appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'events';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchEventsPage;