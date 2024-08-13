import './loginForm.css'
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';

const createLoginForm = (className) => `
    <div class="${className}">
        ${createNewField('sc-main-login_form-email_field', 'email', 'Email')}
        ${createNewField('sc-main-login_form-password_field', 'password', 'Contraseña', 'password')}
    </div>
    ${createNewButton('sc-main-login_form-button', 'Enviar')}
`;

export default createLoginForm;