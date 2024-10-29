import createParagraph from '../../Paragraph/paragraph';

const editProfileOption = (className, text) => `
    <li class="${className}">
        ${createParagraph(`${className}_action`, text, 'edit-profile')}
    </li>
`;

export default editProfileOption;