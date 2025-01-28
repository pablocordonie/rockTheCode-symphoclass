import createLoader from '../../components/Loader/loader';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';
import toggleLoader from '../Toggle/toggleLoader';

const printLoader = (appConfig) => {
    const { appId, loaderClassName, loaderTimeout } = appConfig;

    const app = querySelectorChecker(`#${appId}`, 'printLoader');
    const loader = document.querySelector(`.${loaderClassName}`);

    if (!loader) {
        const newLoader = createLoader(loaderClassName);
        app.insertAdjacentHTML('beforeend', newLoader);
    }
    toggleLoader(appConfig, true);

    setTimeout(function () {
        toggleLoader(appConfig, false);
    }, loaderTimeout);
};

export default printLoader;