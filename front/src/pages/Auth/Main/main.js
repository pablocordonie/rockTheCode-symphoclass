import { createFieldData } from '../../../config/config';
import createAuthForm from '../../../components/Form/Auth/auth';
import createAuthFormField from '../../../components/Item/Auth/Field/field';
import createAuthFormFields from '../../../components/List/Auth/Fields/fields';
import createAuthFormOption from '../../../components/Item/Auth/Option/option';
import createAuthFormOptionBtn from '../../../components/Button/Auth/auth';
import createAuthFormOptionParagraph from '../../../components/Paragraph/Auth/auth';
import createAuthFormOptions from '../../../components/List/Auth/Options/options';
import createNewInput from '../../../components/Input/input';
import createNewLabel from '../../../components/Label/label';
import createSubmitBtn from '../../../components/Button/Submit/submit';

const createAuthMainContent = (className, currentPage) => {
    const authFormFields = [];
    const authOptionalTags = [];

    const authForm = createAuthForm(className);

    const authFormFieldsList = createAuthFormFields(`${className}-fields`);
    authForm.appendChild(authFormFieldsList);

    if (currentPage === 'register') {

        const usernameField = createFieldData(`${className}-username_field`, 'username', 'username', 'Nombre de Usuario');
        authFormFields.push(usernameField);

        const fullnameField = createFieldData(`${className}-fullname_field`, 'fullname', 'fullname', 'Nombre Completo');
        authFormFields.push(fullnameField);
    }

    const emailField = createFieldData(`${className}-email_field`, 'email', 'email', 'Correo electrónico');
    authFormFields.push(emailField);

    const passwordField = createFieldData(`${className}-password_field`, 'password', 'password', 'Contraseña', 'password');
    authFormFields.push(passwordField);

    authFormFields.forEach(field => {
        const authFormField = createAuthFormField(field.className);
        authFormFieldsList.appendChild(authFormField);

        const authFormFieldLabel = createNewLabel(`${authFormField.className}-label`, field.name, field.title);
        authFormField.appendChild(authFormFieldLabel);

        const authFormFieldInput = createNewInput(`${authFormField.className}-input`, field.id, field.name, field.placeholderText, field.inputType);
        authFormField.appendChild(authFormFieldInput);
    });

    const authFormOptions = createAuthFormOptions(`${className}-options`);
    authForm.appendChild(authFormOptions);

    // TO-DO: Falta crear un botón en forma de flecha que haga de retorno a la página de inicio

    if (currentPage === 'login') {
        const submitBtn = createSubmitBtn(`${className}-submit-btn`, 'Iniciar sesión');
        authOptionalTags.push(submitBtn);

        const registerParagraph = createAuthFormOptionParagraph(`${className}-register-message`, '¿No estás registrado en The SymphoClass?');
        authOptionalTags.push(registerParagraph);

        const registerButton = createAuthFormOptionBtn(`${className}-register-btn`, 'Regístrate');
        authOptionalTags.push(registerButton);

    } else {
        const submitBtn = createSubmitBtn(`${className}-submit-btn`, 'Registrarse');
        authOptionalTags.push(submitBtn);

        const loginParagraph = createAuthFormOptionParagraph(`${className}-login-message`, '¿Ya estás registrado en The SymphoClass?');
        authOptionalTags.push(loginParagraph);

        const loginButton = createAuthFormOptionBtn(`${className}-login-btn`, 'Iniciar sesión');
        authOptionalTags.push(loginButton);
    }

    authOptionalTags.forEach(item => {
        const authFormOption = createAuthFormOption(`${authFormOptions.className}-item`);
        authFormOptions.appendChild(authFormOption);

        authFormOption.appendChild(item);
    });

    return authForm;
};

export default createAuthMainContent;