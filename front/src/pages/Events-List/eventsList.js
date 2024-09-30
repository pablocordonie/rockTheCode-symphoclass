import './eventsList.css';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener'
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createNewButton from '../../templates/Button/button';
import createNewInput from '../../templates/Input/input';
import createNewUserNav from '../../templates/Nav/user_nav';
import dropdownMenuToggle from '../../utils/Toggle/dropdown_menu-toggle';

const printEventsList = (appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const webContent = document.querySelector(`.${webContentClassName}`);

    const header = document.querySelector('.sc-header');
    header.className = 'sc-events-header';
    header.innerHTML += createNewUserNav(currentPage, 'random_user');
    header.innerHTML += createNewInput('sc-events-header-search', 'text', 'Buscar eventos...');
    header.innerHTML += createNewButton('sc-events-header-create_btn', 'Crear nuevo evento');

    dropdownMenuToggle(HTMLElements);
    createLogoutListener(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
    createProfileListener(appId, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);

    const main = document.querySelector('.sc-main');
    main.className = 'sc-events-main-list';
    main.innerHTML = '';

    const eventCard = document.createElement('div');
    eventCard.className = 'sc-events-main-card';

    const eventTitle = document.createElement('h3');
    eventTitle.className = 'sc-events-main-card-title';
    eventTitle.innerText = 'Evento 1';
    eventCard.appendChild(eventTitle);

    const eventDate = document.createElement('p');
    eventDate.className = 'sc-events-main-card-date';
    eventDate.innerText = '20 de Agosto, 2025';
    eventCard.appendChild(eventDate);

    const eventCenter = document.createElement('p');
    eventCenter.className = 'sc-events-main-card-institution';
    eventCenter.innerText = 'Escuela de Música Creativa';
    eventCard.appendChild(eventCenter);

    const eventAddress = document.createElement('p');
    eventAddress.className = 'sc-events-main-card-address';
    eventAddress.innerText = 'Calle de la Palma, 35, 28004 Madrid';
    eventCard.appendChild(eventAddress);

    const eventOptions = document.createElement('div');
    eventOptions.className = 'sc-events-main-card-options';
    eventOptions.innerHTML += createNewButton('confirm-btn', 'Confirmar Asistencia');

    eventCard.appendChild(eventOptions);
    main.appendChild(eventCard);
    return webContent;
};

export default printEventsList;