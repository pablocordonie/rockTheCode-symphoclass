import createNewParagraph from '../../Paragraph/paragraph';

const createLogoutOption = (className, text) => {
    const logoutOptionItem = document.createElement('li');
    logoutOptionItem.className = `${className}`;

    const logoutOptionParagraph = createNewParagraph(`${className}_action`, text, 'logout');
    logoutOptionItem.appendChild(logoutOptionParagraph);

    return logoutOptionItem;
};

export default createLogoutOption;