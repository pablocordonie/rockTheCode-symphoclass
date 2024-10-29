import './input.css';
import createIdAttribute from '../Attribute/Id/id';
import createPlaceholder from '../Attribute/Placeholder/placeholder';

const createNewInput = (className, inputType, label, placeholderText = '') => `
    <input ${label !== '' ? createIdAttribute(label) : ''} class="${className}" type=${inputType} ${placeholderText !== '' ? createPlaceholder(placeholderText) : ''}>
`;

export default createNewInput;