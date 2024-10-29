import './eventsList.css';
import createEventListItems from './Item/eventItems';

const createEventsList = (mainClassName, testCards) => `
    <ul class="${mainClassName}-list">
        ${createEventListItems(mainClassName, testCards)}
    </ul>
`;

export default createEventsList;