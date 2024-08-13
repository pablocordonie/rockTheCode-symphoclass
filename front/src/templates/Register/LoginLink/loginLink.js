import './loginLink.css';
import createNewButton from '../../Button/button';

const createLoginLink = (className, text) => `
    <div class="${className}">
        <p class="${className}-message">
            ${text}
        </p>
        ${createNewButton(`${className}-button`, 'Iniciar sesión')}
    </div>
`;

export default createLoginLink;