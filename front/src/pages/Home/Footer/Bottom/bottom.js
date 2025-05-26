import createNewSmallParagraph from '../../../../components/Small/small';

const createFooterBottomCopyright = (footerBottomContent) => {
    const footerCopyrightText = createNewSmallParagraph('\u00A9 The SymphoClass S.L., 2025. All rights reserved');
    footerBottomContent.innerHTML = footerCopyrightText;

    return footerBottomContent;
};

export default createFooterBottomCopyright;