import createLoader from '../../templates/Loader/loader';
import disableLoader from '../Loader/disableLoader';
export const mainContainers = [];

const printLoader = (appId, loaderClassName, scClassName) => {
    const app = document.querySelector(`#${appId}`);
    const loader = document.querySelector(`.${loaderClassName}`);
    const sc = document.querySelector(`.${scClassName}`);

    sc.style.display = 'none';

    loader ? loader.style.display = 'flex' : app.innerHTML += createLoader(loaderClassName);

    setTimeout(function () {
        disableLoader(loaderClassName, scClassName);
    }, 2000);
};

export default printLoader;