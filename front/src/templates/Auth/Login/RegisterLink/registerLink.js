import './registerLink.css';
import createTagTemplate from '../../../Tag/tag';

const createRegisterLink = (className, text) => `
    <div class="${className}">
        ${createTagTemplate('p', `${className}-message`, `${text}`)}
        ${createTagTemplate('button', `${className}-button`, 'Regístrate')}
    </div>
`;

export default createRegisterLink;