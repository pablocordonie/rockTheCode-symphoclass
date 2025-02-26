import './src/styles/style.css';
//import adjustMainContentHeight from './src/utils/Height/adjustMainContentHeight';
import { appConfig, pageRenderers } from './src/config/config';
import errorHandler from './src/utils/Error/errorHandler';
import printLoader from './src/utils/Loader/printLoader';
// import readData from './src/utils/Fetch/GET/readData';

let { currentPage, HTMLElementsWithListeners } = appConfig;

printLoader(appConfig, HTMLElementsWithListeners);

export const renderApp = (appConfig, currentPage, HTMLElementsWithListeners) => {
    try {
        if (!pageRenderers[currentPage]) {
            throw new Error(`No se encontró un renderizador para la página de ${currentPage}`);
        }

        const renderPage = pageRenderers[currentPage];
        renderPage(appConfig, currentPage, HTMLElementsWithListeners);
        adjustMainContentHeight(appConfig, currentPage);
    } catch (error) {
        return errorHandler(error, 'renderApp', appConfig, HTMLElementsWithListeners);
    }
};

/*
const users = await readData('http://localhost:8080/api/v1/user');
console.log(users);
*/

renderApp(appConfig, currentPage, HTMLElementsWithListeners);