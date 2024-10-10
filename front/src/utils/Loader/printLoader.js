import createLoader from '../../templates/Loader/loader';
import disableLoader from '../Loader/disableLoader';
export const mainContainers = [];

const printLoader = (appId, footerClassName, loaderClassName, webContentClassName) => {
    const app = document.querySelector(`#${appId}`);
    const footer = document.querySelector(`.${footerClassName}`);
    const loader = document.querySelector(`.${loaderClassName}`);
    const webContent = document.querySelector(`.${webContentClassName}`);

    footer.style.display = 'none';
    loader ? loader.style.display = 'flex' : app.innerHTML += createLoader(loaderClassName);
    webContent.style.display = 'none';
    webContent.style.margin = '0';

    setTimeout(function () {
        disableLoader(footerClassName, loaderClassName, webContentClassName);
    }, 2000);
};

export default printLoader;