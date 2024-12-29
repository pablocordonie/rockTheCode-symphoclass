import './style.css';
import adjustMainContentHeight from './src/utils/Height/adjustMainContentHeight';
import { appConfig, pageRenderers } from './src/config/config';
import errorHandler from './src/utils/Error/errorHandler';
import printLoader from './src/utils/Loader/printLoader';

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
        return errorHandler(error, 'renderApp');
    }
};

renderApp(appConfig, currentPage, HTMLElementsWithListeners);