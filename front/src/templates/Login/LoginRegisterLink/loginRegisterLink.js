import './loginRegisterLink.css';
import loginRegisterButton from './LoginRegisterButton/loginRegisterButton';

const loginRegisterLink = () => `
    <div class="sc-main-register_link">
        <p class="sc-main-register_link-message">
            ¿No estás registrado en The SymphoClass?
        </p>
        ${loginRegisterButton('sc-main-register_link-button')}
    </div>
`;

export default loginRegisterLink;