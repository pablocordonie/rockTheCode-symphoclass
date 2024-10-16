import './style.css';
import printEventForm from './src/pages/Events/Event-Creator/eventCreator';
import printEventsList from './src/pages/Events/events';
import printLoader from './src/utils/Loader/printLoader';
import printAuthForm from './src/pages/Auth/auth';
import printProfileForm from './src/pages/Profile/profile';

const app = document.querySelector('#app');
const bodyHeightAmount = 110;
const footer = document.querySelector('.sc-footer');
const loaderClassName = 'sc-loader-container';
const webContent = document.querySelector('.sc');

const HTMLElementsArray = [];
let state = {
    currentPage: 'login'
};

printLoader(app.id, footer.className, loaderClassName, webContent.className);

export const renderApp = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    if (currentPage === 'create-event') {
        printEventForm(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else if (currentPage === 'events') {
        printEventsList(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else if (currentPage === 'profile') {
        printProfileForm(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else {
        printAuthForm(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    }
};

renderApp(app.id, bodyHeightAmount, state.currentPage, footer.className, HTMLElementsArray, loaderClassName, webContent.className);