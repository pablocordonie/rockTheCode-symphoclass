import './style.css';
import adjustMainContentHeight from './src/utils/Height/adjustMainContentHeight';
import printAuthForm from './src/pages/Auth/auth';
import printEventForm from './src/pages/Events/Event-Creator/eventCreator';
import printEventsList from './src/pages/Events/events';
import printLoader from './src/utils/Loader/printLoader';
import printProfileForm from './src/pages/Profile/profile';

const app = document.querySelector('#app');
const HTMLElementsArray = [];
const loaderClassName = 'sc-loader-container';
const main = document.querySelector('.sc-main');
const sc = document.querySelector('.sc');
let state = {
    currentPage: 'login'
};

printLoader(app.id, loaderClassName, sc.className);

export const renderApp = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    if (currentPage === 'create-event') {
        printEventForm(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    } else if (currentPage === 'events') {
        printEventsList(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    } else if (currentPage === 'profile') {
        printProfileForm(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    } else {
        printAuthForm(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
    }
    adjustMainContentHeight(currentPage, mainClassName, scClassName);
};

renderApp(app.id, state.currentPage, HTMLElementsArray, loaderClassName, main.className, sc.className);