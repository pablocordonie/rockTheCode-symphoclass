import './loginForm.css'
import createNewField from '../../../Field/field';
import createRegisterLink from '../RegisterLink/registerLink';
import createTagTemplate from '../../../Tag/tag';

const createLoginFormContent = (className, formClassName) => `
    <div class="${className}">
        ${createNewField(`${formClassName}-email_field`, 'email', 'Email')}
        ${createNewField(`${formClassName}-password_field`, 'password', 'Contraseña', 'password')}
    </div>
    ${createTagTemplate('button', `${formClassName}-button`, 'Enviar')}
    ${createRegisterLink('sc-main-register_link', '¿No estás registrado en The SymphoClass?')};
`;

export default createLoginFormContent;