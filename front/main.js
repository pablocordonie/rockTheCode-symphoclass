import './style.css';
import adjustMainContentHeight from './src/utils/Height/adjustMainContentHeight';
import printAuthForm from './src/pages/Auth/auth';
import printEventForm from './src/pages/Events/Event-Creator/eventCreator';
import printEventsList from './src/pages/Events/events';
import printLoader from './src/utils/Loader/printLoader';
import printProfileForm from './src/pages/Profile/profile';

const app = document.querySelector('#app');
const header = document.querySelector('.sc-header');
let HTMLElements = [];
const loaderClassName = 'sc-loader-container';
const main = document.querySelector('.sc-main');
const sc = document.querySelector('.sc');
let state = {
    currentPage: 'login'
};

const appConfig = {
    appId: app.id,
    currentPage: state.currentPage,
    headerClassName: header.className,
    HTMLElements,
    loaderClassName,
    mainClassName: main.className,
    scClassName: sc.className
};
const { appId, scClassName } = appConfig;
let { currentPage } = appConfig;

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