import './profileForm.css';
import createTagTemplate from '../../Tag/tag';
import createNewField from '../../Field/field';

const createProfileForm = (className) => `
    <div class="${className}">
        ${createNewField('sc-main-profile_form-username_field', 'username', 'Username')}
        ${createNewField('sc-main-profile_form-fullname_field', 'fullname', 'Fullname')}
        ${createNewField('sc-main-profile_form-email_field', 'email', 'Email')}
        ${createNewField('sc-main-profile_form-password_field', 'password', 'Contraseña', 'password')}
        ${createNewField('sc-main-profile_form-repeat_password_field', 'compare-password', 'Repetir Contraseña', 'password')}
    </div>
    ${createTagTemplate('button', 'sc-main-profile_form-button', 'Modificar Perfil')}
`;

export default createProfileForm;