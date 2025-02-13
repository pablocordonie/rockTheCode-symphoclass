import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createLogoutOption = (className, text) => {
    const logoutOptionItem = createNewTagTemplate('li', className);

    const logoutOptionParagraph = createNewParagraph(`${className}_action`, text, 'logout');
    logoutOptionItem.appendChild(logoutOptionParagraph);

    return logoutOptionItem;
};

export default createLogoutOption;