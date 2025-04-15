import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const adjustMainContentHeight = (appConfig, currentPage) => {
    const { mainClassName, scClassName } = appConfig;
    let main = '';
    const tsc = querySelectorChecker(`.${scClassName}`, 'adjustMainContentHeight');

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const paddingAmount = windowHeight * 0.01;

    if (currentPage === 'login' || currentPage === 'register') {
        main = querySelectorChecker(`.${mainClassName}`, 'adjustMainContentHeight');

        if (currentPage === 'login') {
            const paddingTop = windowWidth > 900 ? paddingAmount + 0.005 : windowHeight * 0.0125;
            tsc.style.paddingTop = `${paddingTop}rem`;
            main.style.paddingBottom = `${paddingAmount}rem`;
        } else if (currentPage === 'register') {
            const paddingTop = windowHeight * 0.005;
            tsc.style.paddingTop = `${paddingTop}rem`;
            main.style.paddingBottom = `${paddingAmount}rem`;
        }
    } else if (currentPage === 'events') {
        main = querySelectorChecker(`.${mainClassName}-events`, 'adjustMainContentHeight');

        const paddingTop = windowHeight * 0.0075;
        tsc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    }
};

export default adjustMainContentHeight;