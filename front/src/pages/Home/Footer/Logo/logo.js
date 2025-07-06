import createFooterContentItem from '../../../../components/Item/Footer/Content/content';
import createFooterLogo from '../../../../components/Title/H2/Footer/footer';
import createFooterTagline from '../../../../components/Paragraph/Footer/Logo/logo';

const createFooterLogoItems = (footerLogoContent, appConfig, currentPage) => {
    const { footerClassName } = appConfig;
    const footerLogoContentTags = [];

    const footerLogo = createFooterLogo(`${footerClassName}-${currentPage}-logo`, 'The SymphoClass');
    footerLogoContentTags.push(footerLogo);

    const footerTagline = createFooterTagline(`${footerLogo.className}-tagline`, 'Conectando artistas de todo el mundo');
    footerLogoContentTags.push(footerTagline);

    footerLogoContentTags.forEach(tag => {
        const footerLogoContentItem = createFooterContentItem(`${footerClassName}-${currentPage}-logo-item`);
        footerLogoContent.appendChild(footerLogoContentItem);

        footerLogoContentItem.appendChild(tag);
    });
};

export default createFooterLogoItems;