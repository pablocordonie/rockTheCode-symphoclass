import './userProfile.css';
import createNewButton from '../Button/button';
import createNewImage from '../Image/image';
import createNewParagraph from '../Paragraph/paragraph';
import createNewH2Title from '../Title/H2/h2';
import createNewTagTemplate from '../Tag/tag';
import { userInfo } from '../../config/config';

const createUserProfileInfo = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const { email, fullname, img, username } = userInfo;

    const userProfile = createNewTagTemplate('div', `${mainClassName}-${currentPage}`);
    const userProfileContent = createNewTagTemplate('div', `${mainClassName}-${currentPage}_info`);

    const userProfileAvatar = createNewTagTemplate('div', `${mainClassName}-${currentPage}_info-${currentPage}_avatar`);
    const userProfileImg = createNewImage(`${mainClassName}-${currentPage}_info-${currentPage}_avatar-img`, img, 'User Avatar');
    userProfileAvatar.appendChild(userProfileImg);
    userProfileContent.appendChild(userProfileAvatar);

    const userProfileData = createNewTagTemplate('div', `${mainClassName}-${currentPage}_info-${currentPage}_data`);
    userProfileContent.appendChild(userProfileData);

    const userProfileName = createNewH2Title(`${mainClassName}-${currentPage}_info-${currentPage}_username`, username);
    userProfileData.appendChild(userProfileName);

    const userProfileFullName = createNewParagraph(`${mainClassName}-${currentPage}_info-${currentPage}_fullname`, fullname);
    userProfileData.appendChild(userProfileFullName);

    const userProfileEmail = createNewParagraph(`${mainClassName}-${currentPage}_info-${currentPage}_email`, email);
    userProfileData.appendChild(userProfileEmail);

    const editProfileButton = createNewButton(`${mainClassName}-${currentPage}_info-editProfile_btn`, 'Editar', 'edit-profile');
    userProfileContent.appendChild(editProfileButton);

    userProfile.appendChild(userProfileContent);

    return userProfile;
};

export default createUserProfileInfo;