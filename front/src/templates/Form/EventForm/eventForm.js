import './eventForm.css';
import createNewField from '../../Field/field';
import createNewFieldWithButton from '../../Field/Button/field-button';
import createTagTemplate from '../../Tag/tag';

const createEventForm = (className, currentPage) => `
    <div class="${className}">
        ${createNewField(`sc-main-${currentPage}_form-title_field`, 'title', 'Nombre del evento')}
        ${createNewField(`sc-main-${currentPage}_form-date_field`, 'date', 'Fecha')}
        ${createNewField(`sc-main-${currentPage}_form-location_field`, 'location', 'Lugar')}
        ${createNewField(`sc-main-${currentPage}_form-description_field`, 'description', 'Descripción')}
        ${createNewFieldWithButton(`sc-main-${currentPage}_form-img_field`, 'image', 'Imagen', 'button')}
    </div>
    ${createTagTemplate('button', `sc-main-${currentPage}_form-button`, 'Crear Evento')}
`;

export default createEventForm;