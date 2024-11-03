import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventCreatorPage = (appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'create-event';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchEventCreatorPage;