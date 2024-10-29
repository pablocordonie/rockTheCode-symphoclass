import './paragraph.css';
import createTagTemplate from '../Tag/tag';

const createNewParagraph = (className, text, id) => `
    ${createTagTemplate('p', className, text, id)}
`;

export default createNewParagraph;