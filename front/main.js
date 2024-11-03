import './style.css';
import adjustMainContentHeight from './src/utils/Height/adjustMainContentHeight';
import appConfig from './src/config/config';
import printAuthForm from './src/pages/Auth/auth';
import printEventForm from './src/pages/Events/Event-Creator/eventCreator';
import printEventsList from './src/pages/Events/events';
import printLoader from './src/utils/Loader/printLoader';
import printProfileForm from './src/pages/Profile/profile';

const { appId, loaderClassName, scClassName } = appConfig;
let { currentPage, HTMLElements } = appConfig;

printLoader(appId, loaderClassName, scClassName);

export const renderApp = (appConfig, currentPage, HTMLElements) => {
    if (currentPage === 'create-event') {
        printEventForm(appConfig, currentPage, HTMLElements);
    } else if (currentPage === 'events') {
        printEventsList(appConfig, currentPage, HTMLElements);
    } else if (currentPage === 'profile') {
        printProfileForm(appConfig, currentPage, HTMLElements);
    } else {
        printAuthForm(appConfig, currentPage, HTMLElements);
    }
    adjustMainContentHeight(appConfig, currentPage);
};

renderApp(appConfig, currentPage, HTMLElements);