import './style.css'
import printEventsList from './src/pages/Events-List/events_list';
import printLoader from './src/utils/Loader/printLoader';
import printLoginForm from './src/pages/Login/login';
import printRegisterForm from './src/pages/Register/register';

const app = document.querySelector('#app');
const footer = document.querySelector('.sc-footer');
const webContent = document.querySelector('.sc');

let state = {
    currentPage: 'login'
};

printLoader(app.id, footer.className, 'sc-loader-container', webContent.className);

const renderApp = (currentPage) => {
    webContent.innerHTML = '';

    if (currentPage === 'login') {
        printLoginForm(app.id, currentPage, footer.className, 'sc-loader-container', webContent.className);
    } else if (currentPage === 'register') {
        printRegisterForm(app.id, currentPage, footer.className, 'sc-loader-container', webContent.className);
    } else if (currentPage === 'events') {
        printEventsList(webContent.className);
    }
};

export const launchEventsPage = (currentPage) => {
    currentPage = 'events';

    console.log('Has iniciado sesión como usuario registrado!');
    renderApp(currentPage);
};

export const launchLoginPage = (currentPage) => {
    currentPage = 'login';

    console.log('Has clickado en Iniciar sesión!');
    renderApp(currentPage);
};

export const launchRegisterPage = (currentPage) => {
    currentPage = 'register';

    console.log('Has clickado en Registrarse!');
    renderApp(currentPage);
};

renderApp(state.currentPage);