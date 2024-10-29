import './profileForm.css';
import createButton from '../../Button/button';
import createNewField from '../../Field/field';

const createProfileForm = (className, currentPage) => `
    <ul class="${className}">
        ${createNewField(`sc-main-${currentPage}_form-username_field`, 'username', 'Nombre de Usuario')}
        ${createNewField(`sc-main-${currentPage}_form-fullname_field`, 'fullname', 'Nombre Completo')}
        ${createNewField(`sc-main-${currentPage}_form-email_field`, 'email', 'Email')}
        ${createNewField(`sc-main-${currentPage}_form-password_field`, 'password', 'Contraseña', 'password')}
        ${createNewField(`sc-main-${currentPage}_form-repeat_password_field`, 'compare-password', 'Repetir Contraseña', 'password')}
    </ul>
    ${createButton(`sc-main-${currentPage}_form-${currentPage}_button`, 'Modificar Perfil')}
`;

export default createProfileForm;