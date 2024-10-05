import './loginLink.css';
import createTagTemplate from '../../../Tag/tag';

const createLoginLink = (className, text) => `
    <div class="${className}">
        <p class="${className}-message">
            ${text}
        </p>
        ${createTagTemplate('button', `${className}-button`, 'Iniciar sesión')}
    </div>
`;

export default createLoginLink;