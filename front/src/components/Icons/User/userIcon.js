import './userIcon.css';
import createNewTagTemplate from '../../Tag/tag';

const createUserIcon = (className) => {
    const userIconContainer = createNewTagTemplate('div', className);

    const iconClassNames = ['fa-solid', 'fa-user', 'fa-sm'];
    const userIcon = createNewTagTemplate('i', `${className}-icon`);
    iconClassNames.forEach(iconClassName => userIcon.classList.add(iconClassName));
    userIconContainer.appendChild(userIcon);

    return userIconContainer;
};

export default createUserIcon;