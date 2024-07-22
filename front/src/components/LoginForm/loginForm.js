import './loginForm.css'
import loginField from './LoginField/loginField';

const loginForm = () => `
    <div class="mc-main-login_form-fields">
        ${loginField('email', 'Email')}
        ${loginField('password', 'Contraseña', 'password')}
    </div>
    <button class="mc-main-login_form-button">Enviar</button>
`;

export default loginForm;