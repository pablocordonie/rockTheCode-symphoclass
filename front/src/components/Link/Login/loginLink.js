import './loginLink.css';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createLoginLink = (className) => {
    const loginLinkContainer = createNewTagTemplate('li', `${className}_option`);

    const loginParagraph = createNewParagraph(`${className}_message`, '¿Ya estás registrado en The SymphoClass?');
    loginLinkContainer.appendChild(loginParagraph);

    const loginButton = createNewButton(`${className}_button`, 'Iniciar sesión');
    loginLinkContainer.appendChild(loginButton);

    return loginLinkContainer;
};

export default createLoginLink;