import './registerLink.css';
import createNewButton from '../../Button/button';

const createRegisterLink = (className) => `
    <div class="${className}">
        <p class="${className}-message">
            ¿No estás registrado en The SymphoClass?
        </p>
        ${createNewButton('sc-main-register_link-button', 'Regístrate')}
    </div>
`;

export default createRegisterLink;