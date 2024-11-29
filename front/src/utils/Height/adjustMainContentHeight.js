import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const adjustMainContentHeight = (appConfig, currentPage, HTMLElements) => {
    const { mainClassName, scClassName } = appConfig;
    let main = '';

    const sc = querySelectorChecker(`.${scClassName}`, appConfig, 'adjustMainContentHeight', `El HTMLElement de className .${scClassName} no ha podido ser encontrado`, HTMLElements);

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const paddingAmount = windowHeight * 0.01;

    if (currentPage === 'login') {
        main = querySelectorChecker(`.${mainClassName}`, appConfig, 'adjustMainContentHeight', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`, HTMLElements);

        const paddingTop = windowWidth > 900 ? paddingAmount + 0.005 : windowHeight * 0.0125;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    } else if (currentPage === 'events') {
        main = querySelectorChecker(`.${mainClassName}-events`, appConfig, 'adjustMainContentHeight', `El HTMLElement de className .${mainClassName}-events no ha podido ser encontrado`, HTMLElements);

        const paddingTop = windowHeight * 0.0075;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    }
};

export default adjustMainContentHeight;