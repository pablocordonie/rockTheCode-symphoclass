import createFooterBottomContent from '../../../components/Paragraph/Footer/Bottom/bottom';
import createNewSmallParagraph from '../../../components/Small/small';

const createAuthFooterContent = (footerSelector, appConfig, currentPage) => {
    const { footerClassName } = appConfig;

    const footerCopyright = createFooterBottomContent(`${footerClassName}-${currentPage}-bottom`);
    footerSelector.appendChild(footerCopyright);

    const footerCopyrightText = createNewSmallParagraph('\u00A9 The SymphoClass S.L., 2025. All rights reserved');
    footerCopyright.innerHTML = footerCopyrightText;
};

export default createAuthFooterContent;