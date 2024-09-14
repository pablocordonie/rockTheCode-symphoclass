import { renderApp } from '../../../../main';

const launchRegisterPage = (currentPage) => {
    currentPage = 'register';
    renderApp(currentPage);
};

export default launchRegisterPage;