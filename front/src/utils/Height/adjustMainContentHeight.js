import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const adjustMainContentHeight = (appConfig, currentPage) => {
    const { mainClassName, tscClassName } = appConfig;
    const context = 'adjustMainContentHeight';

    const authPaddingAmount = window.innerHeight * 0.015;
    const paddingAmount = window.innerHeight * 0.01;
    const main = querySelectorChecker(`.${mainClassName}`, context);
    const tsc = querySelectorChecker(`.${tscClassName}`, context);

    if (currentPage === 'home') {
        main.style.padding = 'var(--tsc-padding-000)';
        tsc.style.paddingTop = 'var(--tsc-padding-000)';
    } else if (currentPage === 'login') {
        const paddingTop = window.innerWidth > 900 ? authPaddingAmount + 0.005 : window.innerHeight * 0.0125;

        main.style.padding = `var(--tsc-padding-000) var(--tsc-padding-000) ${authPaddingAmount}rem var(--tsc-padding-000)`;
        tsc.style.paddingTop = `${paddingTop}rem`;
    } else if (currentPage === 'register' || currentPage === 'edit_profile') {
        const paddingTop = window.innerHeight * 0.0075;

        main.style.padding = `var(--tsc-padding-000) var(--tsc-padding-000) ${authPaddingAmount}rem var(--tsc-padding-000)`;
        tsc.style.paddingTop = `${paddingTop}rem`;
    } else if (currentPage === 'events') {
        const paddingTop = window.innerHeight * 0.006;

        main.style.padding = `${paddingTop}rem var(--tsc-padding-000) ${paddingAmount}rem`;
        tsc.style.paddingTop = 'var(--tsc-padding-000)';
    }
};

export default adjustMainContentHeight;