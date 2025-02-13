import createNewParagraph from '../../Paragraph/paragraph';
import createNewTagTemplate from '../../Tag/tag';

const createMyProfileOption = (className, text) => {
    const editProfileItem = createNewTagTemplate('li', className);

    const editProfileParagraph = createNewParagraph(`${className}_action`, text, 'profile');
    editProfileItem.appendChild(editProfileParagraph);

    return editProfileItem;
};

export default createMyProfileOption;