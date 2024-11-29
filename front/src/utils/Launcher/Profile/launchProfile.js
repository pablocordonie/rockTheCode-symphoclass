import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchProfilePage = (appConfig, currentPage, HTMLElements) => {
    printLoader(appConfig, HTMLElements);
    activateListenersCleaner(HTMLElements);

    currentPage = 'profile';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchProfilePage;