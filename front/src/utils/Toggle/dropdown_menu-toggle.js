import createClickListener from '../Listeners/Click/createClickListener';

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
        querySelector: document.querySelector('.sc-header-nav-user_options')
    };
    // Listener para mostrar o esconder el menú desplegable
    createClickListener(userOptions.querySelector, userOptions.callback);
};

export default dropdownMenuToggle;