import './registerForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';

const createRegisterForm = (className) => `
    <div class="${className}">
        ${createNewField('sc-main-register_form-username_field', 'username', 'Username')}
        ${createNewField('sc-main-register_form-fullname_field', 'fullname', 'Fullname')}
        ${createNewField('sc-main-register_form-email_field', 'email', 'Email')}
        ${createNewField('sc-main-register_form-password_field', 'password', 'Contraseña', 'password')}
    </div>
    ${createNewButton('sc-main-register_form-button', 'Registrarse')}
`;

export default createRegisterForm;