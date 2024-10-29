import './eventForm.css';
import createButton from '../../Button/button';
import createNewField from '../../Field/field';
import createNewFieldWithButton from '../../Field/Button/field-button';

const createEventForm = (className, currentPage) => `
    <ul class="${className}">
        ${createNewField(`sc-main-${currentPage}_form-title_field`, 'title', 'Nombre del evento')}
        ${createNewField(`sc-main-${currentPage}_form-date_field`, 'date', 'Fecha')}
        ${createNewField(`sc-main-${currentPage}_form-location_field`, 'location', 'Lugar')}
        ${createNewField(`sc-main-${currentPage}_form-description_field`, 'description', 'Descripción')}
        ${createNewFieldWithButton(`sc-main-${currentPage}_form-img_field`, 'image', 'Imagen')}
    </ul>
    ${createButton(`sc-main-${currentPage}_form-${currentPage}_button`, 'Crear Evento')}
`;

export default createEventForm;