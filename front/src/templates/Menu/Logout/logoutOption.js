import createNewParagraph from '../../Paragraph/paragraph';

const logoutOption = (className, text) => `
    <li class="${className}">
        ${createNewParagraph(`${className}_action`, text, 'logout')}
    </li>
`;

export default logoutOption;