import createIdAttribute from '../Attribute/Id/id';

const createTagTemplate = (tag, className, text, id = '') => `
    <${tag} ${id !== '' ? createIdAttribute(id) : ''} class=${className}>${text}</${tag}>
`;

export default createTagTemplate;