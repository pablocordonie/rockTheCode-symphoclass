import './profileForm.css';
import createTagTemplate from '../../Tag/tag';
import createNewField from '../../Field/field';

const createProfileForm = (className, currentPage) => `
    <div class="${className}">
        ${createNewField(`sc-main-${currentPage}_form-username_field`, 'username', 'Nombre de Usuario')}
        ${createNewField(`sc-main-${currentPage}_form-fullname_field`, 'fullname', 'Nombre Completo')}
        ${createNewField(`sc-main-${currentPage}_form-email_field`, 'email', 'Email')}
        ${createNewField(`sc-main-${currentPage}_form-password_field`, 'password', 'Contraseña', 'password')}
        ${createNewField(`sc-main-${currentPage}_form-repeat_password_field`, 'compare-password', 'Repetir Contraseña', 'password')}
    </div>
    ${createTagTemplate('button', `sc-main-${currentPage}_form-button`, 'Modificar Perfil')}
`;

export default createProfileForm;