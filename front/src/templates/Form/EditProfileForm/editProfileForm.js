import './editProfileForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';

const createProfileForm = (className, currentPage) => {
    const profileFormList = document.createElement('ul');
    profileFormList.className = `${className}`;

    const userNameField = createNewField(`sc-main-${currentPage}_form-username_field`, 'username', 'Nombre de Usuario');
    profileFormList.appendChild(userNameField);

    const fullNameField = createNewField(`sc-main-${currentPage}_form-fullname_field`, 'fullname', 'Nombre Completo');
    profileFormList.appendChild(fullNameField);

    const emailField = createNewField(`sc-main-${currentPage}_form-email_field`, 'email', 'Email');
    profileFormList.appendChild(emailField);

    const passwordField = createNewField(`sc-main-${currentPage}_form-password_field`, 'password', 'Contraseña', 'password');
    profileFormList.appendChild(passwordField);

    const repeatPasswordField = createNewField(`sc-main-${currentPage}_form-repeat_password_field`, 'compare-password', 'Repetir Contraseña', 'password');
    profileFormList.appendChild(repeatPasswordField);

    const submitProfileItem = document.createElement('li');
    submitProfileItem.className = `sc-main-${currentPage}_form-${currentPage}_item`;
    const submitProfileButton = createNewButton(`sc-main-${currentPage}_form-${currentPage}_button`, 'Modificar Perfil');
    submitProfileItem.appendChild(submitProfileButton);
    profileFormList.appendChild(submitProfileItem);

    return profileFormList;
};

export default createProfileForm;