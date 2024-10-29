import './loginForm.css';
import createButton from '../../Button/button';
import createNewField from '../../Field/field';
import createRegisterLink from '../../Link/Register/registerLink';

const createLoginFormContent = (className, currentPage) => `
    <ul class="${className}-fields">
        ${createNewField(`${className}-fields-email_field`, 'email', 'Email')}
        ${createNewField(`${className}-fields-password_field`, 'password', 'Contraseña', 'password')}
    </ul>
    ${createButton(`${className}-${currentPage}_button`, 'Enviar')}
    ${createRegisterLink(`${className}-register_link`, '¿No estás registrado en The SymphoClass?')}
`;

export default createLoginFormContent;