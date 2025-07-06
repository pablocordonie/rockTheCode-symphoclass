import createFooterBottomContent from '../../../components/Paragraph/Footer/Bottom/bottom';
import createFooterBottomCopyright from './Bottom/bottom';
import createFooterContent from '../../../components/List/Footer/footer';
import createFooterContentItem from '../../../components/Item/Footer/Content/content';
import createFooterLogoContent from '../../../components/List/Footer/Logo/logo';
import createFooterLogoItems from './Logo/logo';
import createFooterLinksContent from '../../../components/List/Footer/Links/links';
import createFooterLinksItems from './Links/links';

const createHomeFooterContent = (appConfig, currentPage) => {
    const { footerClassName } = appConfig;
    const footerContentTags = [];

    const footerContent = createFooterContent(`${footerClassName}-${currentPage}-content`);

    const footerLogoContent = createFooterLogoContent(`${footerClassName}-${currentPage}-logo-content`);
    footerContentTags.push(footerLogoContent);

    createFooterLogoItems(footerLogoContent, appConfig, currentPage);

    const footerLinksContent = createFooterLinksContent(`${footerClassName}-${currentPage}-links-content`);
    footerContentTags.push(footerLinksContent);

    createFooterLinksItems(footerLinksContent, appConfig, currentPage);

    const footerBottomContent = createFooterBottomContent(`${footerClassName}-${currentPage}-bottom`);
    footerContentTags.push(footerBottomContent);

    createFooterBottomCopyright(footerBottomContent);

    footerContentTags.forEach(tag => {
        const footerContentItem = createFooterContentItem(`${footerClassName}-${currentPage}-item`);
        footerContent.appendChild(footerContentItem);

        footerContentItem.appendChild(tag);
    });

    return footerContent;
};

export default createHomeFooterContent;