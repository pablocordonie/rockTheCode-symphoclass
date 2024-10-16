import './tag.css';
import createLabel from '../Input/Label/label';

const createTagTemplate = (tag, className, text, label = '') => `
    <${tag} ${label !== '' ? createLabel(label) : ''} class=${className}>
        ${text}
    </${tag}>
`;

export default createTagTemplate;