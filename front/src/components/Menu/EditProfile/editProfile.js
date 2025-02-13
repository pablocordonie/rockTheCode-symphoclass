import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createEditProfileOption = (className, text) => {
    const editProfileItem = createNewTagTemplate('li', className);

    const editProfileParagraph = createNewParagraph(`${className}_action`, text, 'edit-profile');
    editProfileItem.appendChild(editProfileParagraph);

    return editProfileItem;
};

export default createEditProfileOption;