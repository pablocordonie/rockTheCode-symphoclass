import './events_list.css'
import createNewInput from '../../templates/Input/input';

/*

<header>
    <h1>Lista de Eventos</h1>
    <input type="text" placeholder="Buscar eventos..." />
</header>

<main class="event-list">
    <div class="event-card">
        <h3>Evento 1</h3>
        <p>Fecha: 20 de Agosto, 2024</p>
        <p>Lugar: Ciudad de México</p>
        <div class="event-options">
            <button class="confirm-btn">Confirmar Asistencia</button>
            <button class="create-btn">Crear Evento</button>
        </div>
    </div>
    <div class="event-card">
        <h3>Evento 2</h3>
        <p>Fecha: 25 de Agosto, 2024</p>
        <p>Lugar: Buenos Aires</p>
        <div class="event-options">
            <button class="confirm-btn">Confirmar Asistencia</button>
            <button class="create-btn">Crear Evento</button>
        </div>
    </div>

        <!-- Añadir más tarjetas de eventos aquí -->
    
</main>

*/

const printEventsList = (webContentClassName) => {
    const webContent = document.querySelector(`.${webContentClassName}`);

    const header = document.querySelector('.sc-header');
    header.className = 'sc-events-header';

    const main = document.querySelector('.sc-main');
    main.className = 'sc-events-main';
    main.innerHTML = '';

    const searchInput = createNewInput('sc-events-header-search');
    searchInput.setAttribute('placeholder', 'Buscar eventos...');
    header.appendChild(searchInput);

    const mainText = document.createElement('p');
    mainText.innerText = 'Aquí aparecería la lista de eventos';
    main.appendChild(mainText);

    return webContent;
};

export default printEventsList;