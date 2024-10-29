import './button.css';
import createTagTemplate from '../Tag/tag';

const createButton = (className, text, id) => `
    ${createTagTemplate('button', className, text, id)}
`;

export default createButton;