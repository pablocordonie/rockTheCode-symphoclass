import createLoader from '../../templates/Loader/loader';
import toggleLoader from '../Toggle/toggleLoader';

const printLoader = (appId, loaderClassName, scClassName) => {
    const app = document.querySelector(`#${appId}`);
    const loader = document.querySelector(`.${loaderClassName}`);

    if (!loader) {
        app.innerHTML += createLoader(loaderClassName);
    }
    toggleLoader(loaderClassName, scClassName, true);

    setTimeout(function () {
        toggleLoader(loaderClassName, scClassName, false);
    }, 2000);
};

export default printLoader;