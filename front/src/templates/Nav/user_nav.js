import './user_nav.css'

const createNewUserNav = (userName) => `
    <nav class="sc-header-nav">
        <div class="sc-header-nav-user_info">
            <div class="sc-header-nav-user_icon">
               <i class="fa-solid fa-user fa-sm"></i>
            </div>
            <div class="sc-header-nav-user_name">${userName}</div>
        </div>
        <div class="sc-header-nav-user_options">
            <i class="sc-header-nav-user_options-icon fa-solid fa-bars"></i>
        </div>
        <ul class="sc-header-nav-dropdown_menu">
            <li class="sc-header-nav-dropdown_menu-edit_item">
                <a href="#" class="sc-header-nav-dropdown_menu-edit_action" id="edit-profile">Cambiar Perfil</a>
            </li>
            <li class="sc-header-nav-dropdown_menu-logout_item">
                <a href="#" class="sc-header-nav-dropdown_menu-logout_action" id="logout">Cerrar Sesión</a>
            </li>
        </ul>
    </nav>
`;

export default createNewUserNav;