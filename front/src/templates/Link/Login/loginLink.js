import './loginLink.css';
import createButton from '../../Button/button';

const createLoginLink = (className, text) => `
    <div class="${className}">
        <p class="${className}-message">
            ${text}
        </p>
        ${createButton(`${className}-button`, 'Iniciar sesión')}
    </div>
`;

export default createLoginLink;