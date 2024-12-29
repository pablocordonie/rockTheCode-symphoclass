import './bars.css';

const createDropdownBars = (className) => {
    const dropdownBarsContainer = document.createElement('div');
    dropdownBarsContainer.className = `${className}`;

    const barsClassNames = ['fa-solid', 'fa-bars'];
    const dropdownBars = document.createElement('i');
    dropdownBars.className = `${className}-icon`;
    barsClassNames.forEach(barsClassName => dropdownBars.classList.add(barsClassName));
    dropdownBarsContainer.appendChild(dropdownBars);

    return dropdownBarsContainer;
};

export default createDropdownBars;