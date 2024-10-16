import createNewListener from '../Listeners/Listener/createNewListener';

const dropdownMenuToggle = (HTMLElements) => {
    const dropdownMenu = document.querySelector('.sc-header-nav-dropdown_menu');
    dropdownMenu.style.display = 'none';

    const userOptions = {
        callback: () => {
            HTMLElements.push(userOptions);
            if (dropdownMenu.style.display === 'flex') {
                dropdownMenu.style.display = 'none';
            } else if (dropdownMenu.style.display === 'none') {
                dropdownMenu.style.display = 'flex';
            }
        },
        querySelector: document.querySelector('.sc-header-nav-user_options'),
        type: 'click'
    };
    const { callback, querySelector, type } = userOptions;
    // Listener para mostrar o esconder el menú desplegable
    createNewListener(querySelector, callback, type);
};

export default dropdownMenuToggle;