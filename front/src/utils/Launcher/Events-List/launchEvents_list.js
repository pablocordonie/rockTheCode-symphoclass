import { renderApp } from '../../../../main';

const launchEventsPage = (currentPage) => {
    currentPage = 'events';
    renderApp(currentPage);
};

export default launchEventsPage;