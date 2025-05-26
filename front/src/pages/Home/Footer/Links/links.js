import createFooterColumn from '../../../../components/Item/Footer/Links/Column/column';
import createFooterHeading from '../../../../components/Title/H3/Footer/footer';
import createFooterLinksList from '../../../../components/List/Footer/Links/Link/link';
import createFooterLinkItem from '../../../../components/Item/Footer/Links/Link/link';
import createFooterLinkText from '../../../../components/Paragraph/Footer/Link/link';
import { homeFooterColumns } from '../../../../config/config';

const createFooterLinksItems = (footerLinksContent, appConfig, currentPage) => {
    const { footerClassName } = appConfig;

    homeFooterColumns.forEach(column => {
        const footerColumn = createFooterColumn(`${footerClassName}-${currentPage}-link-column`);
        footerLinksContent.appendChild(footerColumn);

        const footerHeading = createFooterHeading(`${footerClassName}-${currentPage}-link-heading`, column.title);
        footerColumn.appendChild(footerHeading);

        const footerLinksList = createFooterLinksList(`${footerClassName}-${currentPage}-link-list`);
        footerColumn.appendChild(footerLinksList);

        for (let i = 0; i < 3; i++) {
            const footerLinkItem = createFooterLinkItem(`${footerClassName}-${currentPage}-link-item`);
            footerLinksList.appendChild(footerLinkItem);

            const footerLinkText = createFooterLinkText(column.items[i]);
            footerLinkItem.appendChild(footerLinkText);
        }
    });
};

export default createFooterLinksItems;