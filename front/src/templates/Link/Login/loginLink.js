import './loginLink.css';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';

const createLoginLink = (className, text) => {
    const loginLinkContainer = document.createElement('div');
    loginLinkContainer.className = `${className}`;

    const registerParagraph = createNewParagraph(`${className}_message`, `${text}`);
    loginLinkContainer.appendChild(registerParagraph);

    const registerButton = createNewButton(`${className}_button`, 'Iniciar sesión');
    loginLinkContainer.appendChild(registerButton);

    return loginLinkContainer;
}

export default createLoginLink;