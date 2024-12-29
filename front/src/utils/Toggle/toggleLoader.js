import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const toggleLoader = (appConfig, isVisible) => {
    const { loaderClassName, scClassName } = appConfig;

    const loader = querySelectorChecker(`.${loaderClassName}`, 'toggleLoader');
    loader.style.display = isVisible ? 'flex' : 'none';

    const sc = querySelectorChecker(`.${scClassName}`, 'toggleLoader');
    sc.style.display = isVisible ? 'none' : 'grid';
};

export default toggleLoader;