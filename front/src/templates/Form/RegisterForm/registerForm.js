import './registerForm.css';
import createLoginLink from '../../Link/Login/loginLink';
import createNewField from '../../Field/field';
import createTagTemplate from '../../Tag/tag';

const createRegisterFormContent = (className, formClassName) => `
    <div class="${className}">
        ${createNewField(`${formClassName}-username_field`, 'username', 'Username')}
        ${createNewField(`${formClassName}-fullname_field`, 'fullname', 'Fullname')}
        ${createNewField(`${formClassName}-email_field`, 'email', 'Email')}
        ${createNewField(`${formClassName}-password_field`, 'password', 'Contraseña', 'password')}
    </div>
    ${createTagTemplate('button', `${formClassName}-button`, 'Registrarse')}
    ${createLoginLink('sc-main-login_link', '¿Ya estás registrado en The SymphoClass?')}
`;

export default createRegisterFormContent;