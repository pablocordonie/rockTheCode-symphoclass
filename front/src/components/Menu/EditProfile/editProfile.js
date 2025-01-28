import createNewParagraph from '../../Paragraph/paragraph';

const createEditProfileOption = (className, text) => {
    const editProfileItem = document.createElement('li');
    editProfileItem.className = `${className}`;

    const editProfileParagraph = createNewParagraph(`${className}_action`, text, 'edit-profile');
    editProfileItem.appendChild(editProfileParagraph);

    return editProfileItem;
};

export default createEditProfileOption;