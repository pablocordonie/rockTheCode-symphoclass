import './profileForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';

const createProfileForm = (className) => `
    <div class="${className}">
        ${createNewField('sc-main-profile_form-username_field', 'username', 'Username')}
        ${createNewField('sc-main-profile_form-fullname_field', 'fullname', 'Fullname')}
        ${createNewField('sc-main-profile_form-email_field', 'email', 'Email')}
        ${createNewField('sc-main-profile_form-password_field', 'password', 'Contraseña', 'password')}
        ${''/* Falta incluir un campo para repetir contraseña para poder comparar entre ambos campos de contraseñas */}
    </div>
    ${createNewButton('sc-main-profile_form-button', 'Modificar Perfil')}
`;

export default createProfileForm;