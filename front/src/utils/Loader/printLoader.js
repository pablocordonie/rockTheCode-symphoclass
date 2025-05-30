import createLoader from '../../components/Div/Loader/loader';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';
import toggleLoader from '../Toggle/toggleLoader';

const printLoader = (appConfig) => {
    const { appId, loaderClassName, loaderTimeout } = appConfig;

    const app = querySelectorChecker(`#${appId}`, 'printLoader');
    const loader = document.querySelector(`.${loaderClassName}`);

    if (!loader) {
        const newLoader = createLoader(loaderClassName);
        app.insertAdjacentHTML('afterbegin', newLoader);
    }

    toggleLoader(true, appConfig, app);

    setTimeout(function () {
        toggleLoader(false, appConfig, app);
    }, loaderTimeout);
};

export default printLoader;