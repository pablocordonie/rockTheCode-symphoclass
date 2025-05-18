import './bars.css';
import createNewIcon from '../icon';
import createNewTagTemplate from '../../Tag/tag';

const createDropdownBars = (className) => {
    const dropdownBarsContent = createNewTagTemplate('div', className);

    const barsClassNames = ['fa-solid', 'fa-bars'];
    const dropdownBars = createNewIcon(`${className}-icon`);
    barsClassNames.forEach(barsClassName => dropdownBars.classList.add(barsClassName));
    dropdownBarsContent.appendChild(dropdownBars);

    return dropdownBarsContent;
};

export default createDropdownBars;