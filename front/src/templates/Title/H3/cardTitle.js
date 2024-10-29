import './cardTitle.css';
import createTagTemplate from '../../Tag/tag';

const createCardTitle = (className, text) => `
    ${createTagTemplate('h3', className, text)}
`;

export default createCardTitle;