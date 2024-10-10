const disableLoader = (footerClassName, loaderClassName, webContentClassName) => {
    const footer = document.querySelector(`.${footerClassName}`);
    const loader = document.querySelector(`.${loaderClassName}`);
    const webContent = document.querySelector(`.${webContentClassName}`);

    footer.style.display = 'block';
    loader.style.display = 'none';
    webContent.style.display = 'flex';
    webContent.style.margin = '0 1rem';
};

export default disableLoader;