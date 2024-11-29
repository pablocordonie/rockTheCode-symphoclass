import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchRegisterPage = (appConfig, currentPage, HTMLElements) => {
    printLoader(appConfig, HTMLElements);
    activateListenersCleaner(HTMLElements);

    currentPage = 'register';
    renderApp(appConfig, currentPage, HTMLElements);
};

export default launchRegisterPage;