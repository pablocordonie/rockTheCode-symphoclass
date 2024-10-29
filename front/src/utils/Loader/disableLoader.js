const disableLoader = (loaderClassName, scClassName) => {
    const loader = document.querySelector(`.${loaderClassName}`);
    const sc = document.querySelector(`.${scClassName}`);

    loader.style.display = 'none';
    sc.style.display = 'grid';
};

export default disableLoader;