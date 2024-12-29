import printAuthForm from '../pages/Auth/auth';
import printEventCreatorForm from '../pages/Events/Event-Creator/eventCreator';
import printEventsForm from '../pages/Events/events';
import printProfileForm from '../pages/Profile/profile';

const app = document.querySelector('#app');
const header = document.querySelector('.sc-header');
let HTMLElementsWithListeners = [];
const loaderClassName = 'sc-loader-container';
const loaderTimeout = 2000;
const main = document.querySelector('.sc-main');
const sc = document.querySelector('.sc');
let state = {
    currentPage: 'login'
};

export const pageRenderers = {
    create_event: printEventCreatorForm,
    edit_profile: printProfileForm,
    events: printEventsForm,
    login: printAuthForm,
    register: printAuthForm
};

export const appConfig = {
    appId: app.id,
    currentPage: state.currentPage,
    headerClassName: header.className,
    HTMLElementsWithListeners,
    loaderClassName,
    loaderTimeout,
    mainClassName: main.className,
    scClassName: sc.className
};