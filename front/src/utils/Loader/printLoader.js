import createLoader from '../../templates/Loader/loader';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';
import toggleLoader from '../Toggle/toggleLoader';

const printLoader = (appConfig, HTMLElements) => {
    const { appId, loaderClassName } = appConfig;

    const app = querySelectorChecker(`#${appId}`, appConfig, 'printLoader', `El HTMLElement de className #${appId} no se ha encontrado`, HTMLElements);
    const loader = document.querySelector(`.${loaderClassName}`);

    if (!loader) {
        app.innerHTML += createLoader(loaderClassName);
    }
    toggleLoader(appConfig, HTMLElements, true);

    setTimeout(function () {
        toggleLoader(appConfig, HTMLElements, false);
    }, 2000);
};

export default printLoader;