import './loginForm.css'
import loginButton from './LoginButton/loginButton';
import loginField from './LoginField/loginField';

const loginForm = () => `
    <div class="sc-main-login_form-fields">
        ${loginField('email', 'Email')}
        ${loginField('password', 'Contraseña', 'password')}
    </div>
    ${loginButton()}
`;

export default loginForm;