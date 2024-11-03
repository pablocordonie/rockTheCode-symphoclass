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

export default appConfig;