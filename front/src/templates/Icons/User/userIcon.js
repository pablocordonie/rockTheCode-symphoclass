import './userIcon.css';

const createUserIcon = (className) => {
    const userIconContainer = document.createElement('div');
    userIconContainer.className = `${className}`;

    const iconClassNames = ['fa-solid', 'fa-user', 'fa-sm'];
    const userIcon = document.createElement('i');
    iconClassNames.forEach(iconClassName => userIcon.classList.add(iconClassName));
    userIconContainer.appendChild(userIcon);

    return userIconContainer;
};

export default createUserIcon;