import './userProfile.css';
import createNewButton from '../Button/button';
import createNewImage from '../Image/image';
import createNewParagraph from '../Paragraph/paragraph';
import createProfileTitle from '../Title/H2/profileTitle';
import createTagTemplate from '../Tag/tag';
import { userInfo } from '../../config/config';

const createUserProfileInfo = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const { email, fullname, img, username } = userInfo;

    const userProfile = createTagTemplate('div', `${mainClassName}-${currentPage}`);
    const userProfileContainer = createTagTemplate('div', `${mainClassName}-${currentPage}_info`);

    const userProfileAvatar = createTagTemplate('div', `${mainClassName}-${currentPage}_info-${currentPage}_avatar`);
    const userProfileImg = createNewImage(`${mainClassName}-${currentPage}_info-${currentPage}_avatar-img`, img, 'User Avatar');
    userProfileAvatar.appendChild(userProfileImg);
    userProfileContainer.appendChild(userProfileAvatar);

    const userProfileData = createTagTemplate('div', `${mainClassName}-${currentPage}_info-${currentPage}_data`);
    userProfileContainer.appendChild(userProfileData);

    const userProfileName = createProfileTitle(`${mainClassName}-${currentPage}_info-${currentPage}_username`, username);
    userProfileData.appendChild(userProfileName);

    const userProfileFullName = createNewParagraph(`${mainClassName}-${currentPage}_info-${currentPage}_fullname`, fullname);
    userProfileData.appendChild(userProfileFullName);

    const userProfileEmail = createNewParagraph(`${mainClassName}-${currentPage}_info-${currentPage}_email`, email);
    userProfileData.appendChild(userProfileEmail);

    const editProfileButton = createNewButton(`${mainClassName}-${currentPage}_info-editProfile_btn`, 'Editar perfil', 'button', 'edit-profile');
    userProfileContainer.appendChild(editProfileButton);

    userProfile.appendChild(userProfileContainer);
    return userProfile;
};

export default createUserProfileInfo;