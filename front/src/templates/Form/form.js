import './form.css'
import createNewButton from '../Button/button';
import createNewField from './Field/field';

const createNewForm = (className) => `
    <div class="${className}">
        ${createNewField('sc-main-login_form-email_field', 'Email')}
        ${createNewField('sc-main-login_form-password_field', 'Contraseña', 'password')}
    </div>
    ${createNewButton('sc-main-login_form-button', 'Enviar')}
`;

export default createNewForm;