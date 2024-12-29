import './eventForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import createNewFieldWithButton from '../../Field/Button/field-button';

const createEventForm = (className, currentPage) => {
    const eventFormList = document.createElement('ul');
    eventFormList.className = `${className}`;

    const eventTitleField = createNewField(`sc-main-${currentPage}_form-title_field`, 'title', 'Nombre del evento');
    eventFormList.appendChild(eventTitleField);

    const eventDateField = createNewField(`sc-main-${currentPage}_form-date_field`, 'date', 'Fecha');
    eventFormList.appendChild(eventDateField);

    const eventLocationField = createNewField(`sc-main-${currentPage}_form-location_field`, 'location', 'Lugar');
    eventFormList.appendChild(eventLocationField);

    const eventDescriptionField = createNewField(`sc-main-${currentPage}_form-description_field`, 'description', 'Descripción');
    eventFormList.appendChild(eventDescriptionField);

    const eventImageField = createNewFieldWithButton(`sc-main-${currentPage}_form-img_field`, 'image', 'Imagen');
    eventFormList.appendChild(eventImageField);

    const submitEventItem = document.createElement('li');
    submitEventItem.className = `sc-main-${currentPage}_form-${currentPage}_item`;
    const submitEventButton = createNewButton(`sc-main-${currentPage}_form-${currentPage}_button`, 'Crear Evento');
    submitEventItem.appendChild(submitEventButton);
    eventFormList.appendChild(submitEventItem);

    return eventFormList;
};

export default createEventForm;