import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const toggleLoader = (appConfig, HTMLElements, isVisible) => {
    const { loaderClassName, scClassName } = appConfig;

    const loader = querySelectorChecker(`.${loaderClassName}`, appConfig, 'toggleLoader', `El HTMLElement de className .${loaderClassName} no se ha encontrado`, HTMLElements);
    loader.style.display = isVisible ? 'flex' : 'none';

    const sc = querySelectorChecker(`.${scClassName}`, appConfig, 'toggleLoader', `El HTMLElement de className .${scClassName} no se ha encontrado`, HTMLElements);
    sc.style.display = isVisible ? 'none' : 'grid';
};

export default toggleLoader;