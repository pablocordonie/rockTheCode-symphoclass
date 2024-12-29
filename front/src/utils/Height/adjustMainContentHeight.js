import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const adjustMainContentHeight = (appConfig, currentPage) => {
    const { mainClassName, scClassName } = appConfig;
    let main = '';
    const sc = querySelectorChecker(`.${scClassName}`, 'adjustMainContentHeight');

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const paddingAmount = windowHeight * 0.01;

    if (currentPage === 'login') {
        main = querySelectorChecker(`.${mainClassName}`, 'adjustMainContentHeight');

        const paddingTop = windowWidth > 900 ? paddingAmount + 0.005 : windowHeight * 0.0125;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    } else if (currentPage === 'events') {
        main = querySelectorChecker(`.${mainClassName}-events`, 'adjustMainContentHeight');

        const paddingTop = windowHeight * 0.0075;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    }
};

export default adjustMainContentHeight;