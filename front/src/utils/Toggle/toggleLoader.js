import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const toggleLoader = (isVisible, appConfig, appSelector) => {
    const { loaderClassName, scClassName } = appConfig;
    const context = 'toggleLoader';

    const loader = querySelectorChecker(`.${loaderClassName}`, context);
    const tsc = querySelectorChecker(`.${scClassName}`, context);

    appSelector.style.height = isVisible ? 'var(--tsc-height-full)' : '';
    loader.style.display = isVisible ? 'flex' : 'none';
    tsc.style.display = isVisible ? 'none' : 'flex';
};

export default toggleLoader;