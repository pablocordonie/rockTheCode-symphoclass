import './eventOptions.css';
import createTagTemplate from '../../Tag/tag';

const createEventOptions = (className) => `
    <div class="${className}">
        ${createTagTemplate('button', 'confirm-btn', 'Confirmar Asistencia')}
    </div>
`;

export default createEventOptions;