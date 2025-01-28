import createNewParagraph from '../../Paragraph/paragraph';

const createMyProfileOption = (className, text) => {
    const editProfileItem = document.createElement('li');
    editProfileItem.className = `${className}`;

    const editProfileParagraph = createNewParagraph(`${className}_action`, text, 'profile');
    editProfileItem.appendChild(editProfileParagraph);

    return editProfileItem;
};

export default createMyProfileOption;