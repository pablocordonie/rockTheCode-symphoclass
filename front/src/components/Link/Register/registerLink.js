import './registerLink.css';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';

const createRegisterLink = (className) => {
    const registerLinkContainer = document.createElement('li');
    registerLinkContainer.className = `${className}_option`;

    const registerParagraph = createNewParagraph(`${className}_message`, '¿No estás registrado en The SymphoClass?');
    registerLinkContainer.appendChild(registerParagraph);

    const registerButton = createNewButton(`${className}_button`, 'Regístrate');
    registerLinkContainer.appendChild(registerButton);

    return registerLinkContainer;
};

export default createRegisterLink;