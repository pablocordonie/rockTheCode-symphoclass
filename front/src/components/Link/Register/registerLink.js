import './registerLink.css';
import createNewButton from '../../Button/button';
import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createRegisterLink = (className) => {
    const registerLinkContent = createNewTagTemplate('li', `${className}_option`);

    const registerParagraph = createNewParagraph(`${className}_message`, '¿No estás registrado en The SymphoClass?');
    registerLinkContent.appendChild(registerParagraph);

    const registerButton = createNewButton(`${className}_button`, 'Regístrate');
    registerLinkContent.appendChild(registerButton);

    return registerLinkContent;
};

export default createRegisterLink;