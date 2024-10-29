import './registerLink.css';
import createButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';

const createRegisterLink = (className, text) => `
    <div class="${className}">
        ${createNewParagraph(`${className}-message`, `${text}`)}
        ${createButton(`${className}-button`, 'Regístrate')}
    </div>
`;

export default createRegisterLink;