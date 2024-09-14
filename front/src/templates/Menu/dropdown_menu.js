import './dropdown_menu.css';

const dropdownMenu = () => `
    <ul class="sc-header-nav-dropdown_menu">
        <li class="sc-header-nav-dropdown_menu-edit_item">
            <a href="#" class="sc-header-nav-dropdown_menu-edit_action" id="edit-profile">
                Cambiar Perfil
            </a>
        </li>
        <li class="sc-header-nav-dropdown_menu-logout_item">
            <a href="#" class="sc-header-nav-dropdown_menu-logout_action" id="logout">
                Cerrar Sesión
            </a>
        </li>
    </ul>
`;

export default dropdownMenu;