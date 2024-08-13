import './registerLink.css';
import createNewButton from '../../Button/button';

const createRegisterLink = (className, text) => `
    <div class="${className}">
        <p class="${className}-message">
            ${text}
        </p>
        ${createNewButton(`${className}-button`, 'Regístrate')}
    </div>
`;

export default createRegisterLink;