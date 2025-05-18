import createNewContainer from '../../../components/Div/div';
import createNewH2Title from '../../../components/Title/H2/h2';
import createNewH3Title from '../../../components/Title/H3/h3';
import createNewListItem from '../../../components/List/Item/listItem';
import createNewParagraph from '../../../components/Paragraph/paragraph';
import createNewSmallParagraph from '../../../components/Paragraph/Small/small';
import createNewUnorderedList from '../../../components/List/list';

const createHeroFooterContent = (appConfig) => {
    const { footerClassName } = appConfig;

    const footerContent = createNewContainer(`${footerClassName}-content`);

    const footerLogoContent = createNewContainer(`${footerClassName}-logo-content`);
    footerContent.appendChild(footerLogoContent);

    const footerLogo = createNewH2Title(`${footerClassName}-logo`, 'The SymphoClass');
    footerLogoContent.appendChild(footerLogo);

    const footerTagline = createNewParagraph(`${footerLogo.className}-tagline`, 'Connecting musicians worldwide');
    footerLogoContent.appendChild(footerTagline);

    const footerLinks = createNewContainer(`${footerClassName}-links`);
    footerContent.appendChild(footerLinks);

    const footerColumns = [
        {
            title: 'Platform',
            items: ['Features', 'Testimonials', 'Pricing']
        },
        {
            title: 'Company',
            items: ['About Us', 'Careers', 'Contact']
        },
        {
            title: 'Legal',
            items: ['Terms', 'Privacy', 'Cookies']
        }
    ];

    footerColumns.forEach(column => {
        const footerColumn = createNewContainer(`${footerClassName}-link-column`);
        footerLinks.appendChild(footerColumn);

        const footerHeading = createNewH3Title(`${footerClassName}-link-heading`, column.title);
        footerColumn.appendChild(footerHeading);

        const footerLinksList = createNewUnorderedList(`${footerClassName}-link-list`);
        footerColumn.appendChild(footerLinksList);

        for (let i = 0; i < 3; i++) {
            const footerLinkItem = createNewListItem(`${footerClassName}-link-item`);
            footerLinksList.appendChild(footerLinkItem);

            const footerLinkText = createNewParagraph('', column.items[i]);
            footerLinkItem.appendChild(footerLinkText);
        }
    });

    const footerBottom = createNewContainer(`${footerClassName}-bottom`);
    footerContent.appendChild(footerBottom);

    const footerCopyright = createNewParagraph(`${footerBottom.className}-copyright`, '');
    footerBottom.appendChild(footerCopyright);

    const footerCopyrightText = createNewSmallParagraph('\u00A9 The SymphoClass S.L., 2025. All rights reserved');
    footerCopyright.innerHTML = footerCopyrightText;

    return footerContent;
};

export default createHeroFooterContent;