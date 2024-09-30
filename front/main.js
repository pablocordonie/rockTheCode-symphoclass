import './style.css'
import printEventsList from './src/pages/Events-List/eventsList';
import printLoader from './src/utils/Loader/printLoader';
import printLoginForm from './src/pages/Login/login';
import printProfileForm from './src/pages/Profile/profile';
import printRegisterForm from './src/pages/Register/register';

const app = document.querySelector('#app');
const footer = document.querySelector('.sc-footer');
const webContent = document.querySelector('.sc');

const HTMLElementsArray = [];
let state = {
    currentPage: 'login'
};

printLoader(app.id, footer.className, 'sc-loader-container', webContent.className);

export const renderApp = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    if (currentPage === 'events') {
        printEventsList(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else if (currentPage === 'login') {
        printLoginForm(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else if (currentPage === 'profile') {
        printProfileForm(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    } else if (currentPage === 'register') {
        printRegisterForm(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    }
};

renderApp(app.id, state.currentPage, footer.className, HTMLElementsArray, 'sc-loader-container', webContent.className);