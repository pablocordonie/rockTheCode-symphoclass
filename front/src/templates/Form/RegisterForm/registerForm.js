import './registerForm.css';
import createButton from '../../Button/button';
import createLoginLink from '../../Link/Login/loginLink';
import createNewField from '../../Field/field';

const createRegisterFormContent = (className, currentPage) => `
    <ul class="${className}-fields">
        ${createNewField(`${className}-fields-username_field`, 'username', 'Username')}
        ${createNewField(`${className}-fields-fullname_field`, 'fullname', 'Fullname')}
        ${createNewField(`${className}-fields-email_field`, 'email', 'Email')}
        ${createNewField(`${className}-fields-password_field`, 'password', 'Contraseña', 'password')}
    </ul>
    ${createButton(`${className}-${currentPage}_button`, 'Registrarse')}
    ${createLoginLink(`${className}-login_link`, '¿Ya estás registrado en The SymphoClass?')}
`;

export default createRegisterFormContent;