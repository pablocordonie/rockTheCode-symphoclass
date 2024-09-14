import { renderApp } from '../../../../main';

const launchLoginPage = (currentPage) => {
    currentPage = 'login';
    renderApp(currentPage);
};

export default launchLoginPage;