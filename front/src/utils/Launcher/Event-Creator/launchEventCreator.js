import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventCreatorPage = (appConfig, currentPage, HTMLElements) => {
    printLoader(appConfig, HTMLElements);
    activateListenersCleaner(HTMLElements);

    currentPage = 'create-event';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchEventCreatorPage;