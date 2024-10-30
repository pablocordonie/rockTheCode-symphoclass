import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventCreatorPage = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    printLoader(appId, loaderClassName, scClassName);
    activateListenersCleaner(HTMLElements);

    currentPage = 'create-event';
    renderApp(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
};

export default launchEventCreatorPage;