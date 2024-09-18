import { renderApp } from '../../../../main';

const launchProfilePage = (currentPage) => {
    currentPage = 'profile';
    renderApp(currentPage);
};

export default launchProfilePage;