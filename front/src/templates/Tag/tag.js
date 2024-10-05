import './tag.css';

const createTagTemplate = (tag, className, text) => `
    <${tag} class=${className}>
        ${text}
    </${tag}>
`;

export default createTagTemplate;