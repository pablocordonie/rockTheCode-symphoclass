import printAuthForm from '../pages/Auth/auth';
import printEventCreatorForm from '../pages/Events/Event-Creator/eventCreator';
import printEventsForm from '../pages/Events/events';
import printEditProfileForm from '../pages/Profile/Edit-Profile/editProfile';
import printHeroPage from '../pages/Hero/hero';
import printUserProfile from '../pages/Profile/profile';
import querySelectorChecker from '../utils/QuerySelector/querySelectorChecker';

const app = querySelectorChecker('#app', 'appConfig');
const footer = querySelectorChecker('.tsc-footer', 'appConfig');
const header = querySelectorChecker('.tsc-header', 'appConfig');
let HTMLElementsWithListeners = [];
const loaderClassName = 'tsc-loader';
const loaderTimeout = 2000;
const main = querySelectorChecker('.tsc-main', 'appConfig');
const tsc = querySelectorChecker('.tsc', 'appConfig');
let state = {
    currentPage: 'hero'
};

export const appConfig = {
    appId: app.id,
    currentPage: state.currentPage,
    footerClassName: footer.className,
    headerClassName: header.className,
    HTMLElementsWithListeners,
    loaderClassName,
    loaderTimeout,
    mainClassName: main.className,
    scClassName: tsc.className
};

export const pageRenderers = {
    create_event: printEventCreatorForm,
    edit_profile: printEditProfileForm,
    events: printEventsForm,
    hero: printHeroPage,
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