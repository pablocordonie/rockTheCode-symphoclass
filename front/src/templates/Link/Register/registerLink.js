import './registerLink.css';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';

const createRegisterLink = (className, text) => {
    const registerLinkContainer = document.createElement('div');
    registerLinkContainer.className = `${className}`;

    const registerParagraph = createNewParagraph(`${className}_message`, `${text}`);
    registerLinkContainer.appendChild(registerParagraph);

    const registerButton = createNewButton(`${className}_button`, 'Regístrate');
    registerLinkContainer.appendChild(registerButton);

    return registerLinkContainer;
};

export default createRegisterLink;