import activateContentCleaner from './contentCleaner';

const activatePageCleaner = (headerSelector, mainSelector, footerSelector = '') => {
    let selectors = [headerSelector, mainSelector];

    if (footerSelector) {
        selectors.push(footerSelector);
    }

    for (let selector of selectors) {
        activateContentCleaner(selector);
    }

    selectors = [];
};

export default activatePageCleaner;