import activateContentCleaner from './contentCleaner';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const activatePageCleaner = (appConfig, currentPage, headerSelector, mainSelector, footerSelector = '') => {
    const { tscClassName } = appConfig;
    let selectors = [];

    const tsc = querySelectorChecker(`.${tscClassName}`, 'activatePageCleaner');

    selectors = [headerSelector, mainSelector];

    if (footerSelector) {
        selectors.push(footerSelector);
    }

    for (let selector of selectors) {
        activateContentCleaner(selector);
    }

    if (currentPage === 'login' || currentPage === 'register' || currentPage === 'edit_profile') {
        tsc.classList.remove(`${tscClassName}-flex`);
    }
};

export default activatePageCleaner;