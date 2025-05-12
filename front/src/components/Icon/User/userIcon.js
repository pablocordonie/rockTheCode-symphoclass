import './userIcon.css';
import createNewIcon from '../icon';
import createNewTagTemplate from '../../Tag/tag';

const createUserIcon = (className) => {
    const userIconContainer = createNewTagTemplate('div', className);

    const iconClassNames = ['fa-solid', 'fa-user', 'fa-sm'];
    const userIcon = createNewIcon(`${className}-icon`);
    iconClassNames.forEach(iconClassName => userIcon.classList.add(iconClassName));
    userIconContainer.appendChild(userIcon);

    return userIconContainer;
};

export default createUserIcon;