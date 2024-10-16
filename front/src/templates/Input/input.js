import createLabel from './Label/label';

const createNewInput = (className, inputType, label, placeholderText = '') => `
    <input ${label !== '' ? createLabel(label) : ''} class="${className} type="${inputType}" placeholder="${placeholderText}">
`;

export default createNewInput;