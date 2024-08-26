const disableLoader = (appId, footerClassName, loaderClassName, webContentClassName) => {
    const app = document.querySelector(`#${appId}`);
    const footer = document.querySelector(`.${footerClassName}`);
    const loader = document.querySelector(`.${loaderClassName}`);
    const webContent = document.querySelector(`.${webContentClassName}`);

    app.style.margin = '0 1rem';
    footer.style.display = 'block';
    loader.style.display = 'none';
    webContent.style.display = 'flex';
};

export default disableLoader;