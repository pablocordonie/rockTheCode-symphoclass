import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const toggleLoader = (isVisible, appConfig, appSelector) => {
    const { loaderClassName, tscClassName } = appConfig;
    const context = 'toggleLoader';

    const loader = querySelectorChecker(`.${loaderClassName}`, context);
    const tsc = querySelectorChecker(`.${tscClassName}`, context);

    appSelector.style.height = isVisible ? 'var(--tsc-height-1100)' : appSelector.removeAttribute('style');
    loader.style.display = isVisible ? 'flex' : 'none';
    tsc.style.display = isVisible ? 'none' : 'flex';
};

export default toggleLoader;