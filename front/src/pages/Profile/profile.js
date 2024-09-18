import './profile.css';
import createNewClickListener from '../../utils/Listeners/clickListener';
import createProfileForm from '../../templates/Profile/ProfileForm/profileForm';
import launchEventsPage from '../../utils/Launcher/Events-List/launchEvents_list';
import printLoader from '../../utils/Loader/printLoader';

const printProfileForm = (appId, currentPage, footerClassName, loaderClassName, webContentClassName) => {

    /* Falta incluir el user navbar, ya que el usuario sigue registrado a la hora de modificar su perfil */

    const main = document.querySelector('.sc-main');

    const form = document.createElement('form');
    form.classList.add('sc-main-profile_form');

    form.innerHTML += `
        ${createProfileForm('sc-main-profile_form-fields')}
    `;

    main.appendChild(form);

    const updateButton = document.querySelector('.sc-main-profile_form-button');

    createNewClickListener(updateButton, (ev) => {
        ev.preventDefault();
        printLoader(appId, footerClassName, loaderClassName, webContentClassName);
        launchEventsPage(currentPage);
    });
};

export default printProfileForm;