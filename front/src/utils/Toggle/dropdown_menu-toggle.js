import { createClickListener } from '../Listeners/Click/clickListeners';

const dropdownMenuToggle = () => {
    const dropdownMenu = document.querySelector('.sc-header-nav-dropdown_menu');
    const userOptions = document.querySelector('.sc-header-nav-user_options');

    dropdownMenu.style.display = 'none';

    // Listener para mostrar o esconder el menú desplegable
    createClickListener(userOptions, () => {
        if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
        } else if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'flex';
        }
    });

    // Listener para cerrar el menú desplegable si se hace clic fuera de él
    createClickListener(window, (event) => {
        console.log(event.target);
        if (!userOptions.contains(event.target) && dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
        }

        event.stopPropagation();
    });
};

export default dropdownMenuToggle;