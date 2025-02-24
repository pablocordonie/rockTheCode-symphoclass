import printAuthForm from '../pages/Auth/auth';
import printEventCreatorForm from '../pages/Events/Event-Creator/eventCreator';
import printEventsForm from '../pages/Events/events';
import printEditProfileForm from '../pages/Profile/Edit-Profile/editProfile';
import printUserProfile from '../pages/Profile/profile';
import querySelectorChecker from '../utils/QuerySelector/querySelectorChecker';

const app = querySelectorChecker('#app', 'appConfig');
const header = querySelectorChecker('.sc-header', 'appConfig');
let HTMLElementsWithListeners = [];
const loaderClassName = 'sc-loader-container';
const loaderTimeout = 2000;
const main = querySelectorChecker('.sc-main', 'appConfig');
const sc = querySelectorChecker('.sc', 'appConfig');
let state = {
    currentPage: 'login'
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

export const pageRenderers = {
    create_event: printEventCreatorForm,
    edit_profile: printEditProfileForm,
    events: printEventsForm,
    login: printAuthForm,
    profile: printUserProfile,
    register: printAuthForm
};

export const userInfo = {
    email: 'randomuser@email.com',
    fullname: 'Random User',
    img: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1736876054/pngtree-user-profile-icon-image-vector-png-image_12640450_ejfhhg.png',
    username: 'random_user'
};