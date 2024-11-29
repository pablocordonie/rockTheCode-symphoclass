import './style.css';
import adjustMainContentHeight from './src/utils/Height/adjustMainContentHeight';
import appConfig from './src/config/config';
import printAuthForm from './src/pages/Auth/auth';
import printEventCreator from './src/pages/Events/Event-Creator/eventCreator';
import printEventsList from './src/pages/Events/events';
import printLoader from './src/utils/Loader/printLoader';
import printProfileForm from './src/pages/Profile/profile';

let { currentPage, HTMLElements } = appConfig;

printLoader(appConfig, HTMLElements);

export const renderApp = (appConfig, currentPage, HTMLElements) => {

    if (currentPage === 'create-event') {
        printEventCreator(appConfig, currentPage, HTMLElements);
    } else if (currentPage === 'events') {
        printEventsList(appConfig, currentPage, HTMLElements);
    } else if (currentPage === 'profile') {
        printProfileForm(appConfig, currentPage, HTMLElements);
    } else {
        printAuthForm(appConfig, currentPage, HTMLElements);
    }
    adjustMainContentHeight(appConfig, currentPage, HTMLElements);
};

renderApp(appConfig, currentPage, HTMLElements);