import './style.css'
import printEventsList from './src/pages/Events-List/eventsList';
import printLoader from './src/utils/Loader/printLoader';
import printAuthForm from './src/pages/Auth/auth';
import printProfileForm from './src/pages/Profile/profile';

const app = document.querySelector('#app');
const footer = document.querySelector('.sc-footer');
const loaderClassName = 'sc-loader-container';
const webContent = document.querySelector('.sc');

const HTMLElementsArray = [];
let state = {
    currentPage: 'login'
};

printLoader(app.id, footer.className, loaderClassName, webContent.className);

export const renderApp = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    if (currentPage === 'events') {
        printEventsList(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else if (currentPage === 'profile') {
        printProfileForm(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else {
        printAuthForm(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    }
};

renderApp(app.id, state.currentPage, footer.className, HTMLElementsArray, loaderClassName, webContent.className);