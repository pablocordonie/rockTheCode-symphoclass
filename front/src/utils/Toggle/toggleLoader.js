const toggleLoader = (loaderClassName, scClassName, isVisible) => {
    const loader = document.querySelector(`.${loaderClassName}`);
    const sc = document.querySelector(`.${scClassName}`);

    loader.style.display = isVisible ? 'flex' : 'none';
    sc.style.display = isVisible ? 'none' : 'grid';
};

export default toggleLoader;