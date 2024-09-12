import createNewClickListener from '../Listeners/clickListener';

const dropdownMenuToggle = () => {
    const dropdownMenu = document.querySelector('.sc-header-nav-dropdown_menu');
    const userOptions = document.querySelector('.sc-header-nav-user_options');

    // Listener para mostrar o esconder el menú desplegable
    createNewClickListener(userOptions, () => {
        if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
        } else if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'flex';
        }
    });

    // Listener para cerrar el menú desplegable si se hace clic fuera de él
    createNewClickListener(window, (event) => {
        if (!userOptions.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
};

export default dropdownMenuToggle;