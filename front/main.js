import './style.css'
import printEventsList from './src/pages/Events-List/events_list';
import printLoader from './src/utils/Loader/printLoader';
import printLoginForm from './src/pages/Login/login';
import printProfileForm from './src/pages/Profile/profile';
import printRegisterForm from './src/pages/Register/register';

const app = document.querySelector('#app');
const footer = document.querySelector('.sc-footer');
const webContent = document.querySelector('.sc');

let state = {
    currentPage: 'login'
};

printLoader(app.id, footer.className, 'sc-loader-container', webContent.className);

export const renderApp = (currentPage) => {
    webContent.innerHTML = '';

    if (currentPage === 'events') {
        printEventsList(app.id, currentPage, footer.className, 'sc-loader-container', webContent.className);
    } else if (currentPage === 'login') {
        printLoginForm(app.id, currentPage, footer.className, 'sc-loader-container', webContent.className);
    } else if (currentPage === 'profile') {
        printProfileForm(app.id, currentPage, footer.className, 'sc-loader-container', webContent.className);
    } else if (currentPage === 'register') {
        printRegisterForm(app.id, currentPage, footer.className, 'sc-loader-container', webContent.className);
    }
};

renderApp(state.currentPage);