import './events_list.css'

const printEventsList = () => {
    const header = document.querySelector('.sc-header');
    header.innerHTML = '';

    const main = document.querySelector('.sc-main');
    main.innerHTML = '';

    const testDiv = document.createElement('div');

    const p = document.createElement('p');
    p.innerText = 'Aquí aparece la lista de eventos';
    testDiv.appendChild(p);

    main.appendChild(testDiv);
    return main;
};

export default printEventsList;