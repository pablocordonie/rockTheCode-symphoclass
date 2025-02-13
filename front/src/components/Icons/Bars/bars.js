import './bars.css';
import createNewTagTemplate from '../../Tag/tag';

const createDropdownBars = (className) => {
    const dropdownBarsContainer = createNewTagTemplate('div', className);

    const barsClassNames = ['fa-solid', 'fa-bars'];
    const dropdownBars = createNewTagTemplate('i', `${className}-icon`);
    barsClassNames.forEach(barsClassName => dropdownBars.classList.add(barsClassName));
    dropdownBarsContainer.appendChild(dropdownBars);

    return dropdownBarsContainer;
};

export default createDropdownBars;