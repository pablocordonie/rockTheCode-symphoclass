import './userIcon.css';
import createNewIcon from '../icon';
import createNewTagTemplate from '../../Tag/tag';

const createUserIcon = (className) => {
    const userIconContent = createNewTagTemplate('div', className);

    const iconClassNames = ['fa-solid', 'fa-user', 'fa-sm'];
    const userIcon = createNewIcon(`${className}-icon`);
    iconClassNames.forEach(iconClassName => userIcon.classList.add(iconClassName));
    userIconContent.appendChild(userIcon);

    return userIconContent;
};

export default createUserIcon;