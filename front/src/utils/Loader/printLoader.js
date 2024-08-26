import createNewLoader from '../../templates/Loader/loader';
import disableLoader from '../Loader/disableLoader';

const printLoader = (appId, footerClassName, loaderClassName, webContentClassName) => {
    const app = document.querySelector(`#${appId}`);
    const footer = document.querySelector(`.${footerClassName}`);
    const loader = document.querySelector(`.${loaderClassName}`);
    const webContent = document.querySelector(`.${webContentClassName}`);

    app.style.margin = '0';
    footer.style.display = 'none';
    loader ? loader.style.display = 'flex' : app.innerHTML += createNewLoader(loaderClassName);
    webContent.style.display = 'none';

    setTimeout(function () {
        disableLoader(appId, footerClassName, loaderClassName, webContentClassName);
    }, 2000);
};

export default printLoader;