import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventsPage = (appConfig, currentPage, HTMLElements) => {
    printLoader(appConfig, HTMLElements);
    activateListenersCleaner(HTMLElements);

    currentPage = 'events';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchEventsPage;