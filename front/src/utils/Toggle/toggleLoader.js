import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const toggleLoader = (appConfig, isVisible) => {
    const { loaderClassName, scClassName } = appConfig;

    const loader = querySelectorChecker(`.${loaderClassName}`, 'toggleLoader');
    loader.style.display = isVisible ? 'flex' : 'none';

    const tsc = querySelectorChecker(`.${scClassName}`, 'toggleLoader');
    tsc.style.display = isVisible ? 'none' : 'flex';
};

export default toggleLoader;