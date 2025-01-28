import './eventForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import createUploadImageField from '../../Field/Upload-Image/uploadImage';

const createEventForm = (appConfig, className, currentPage) => {
    const { mainClassName } = appConfig;

    const eventFormList = document.createElement('ul');
    eventFormList.className = `${className}`;

    const eventTitleField = createNewField(`${mainClassName}-${currentPage}_form-title_field`, 'title', 'Nombre del evento');
    eventFormList.appendChild(eventTitleField);

    const eventDateField = createNewField(`${mainClassName}-${currentPage}_form-date_field`, 'date', 'Fecha');
    eventFormList.appendChild(eventDateField);

    const eventAddressField = createNewField(`${mainClassName}-${currentPage}_form-address_field`, 'address', 'Dirección');
    eventFormList.appendChild(eventAddressField);

    const eventCenterField = createNewField(`${mainClassName}-${currentPage}_form-center_field`, 'center', 'Centro de enseñanza');
    eventFormList.appendChild(eventCenterField);

    const eventImageField = createUploadImageField(`${mainClassName}-${currentPage}_form-img_field`, 'image', 'Imagen');
    eventFormList.appendChild(eventImageField);

    const submitEventItem = document.createElement('li');
    submitEventItem.className = `${mainClassName}-${currentPage}_form-${currentPage}_item`;
    const submitEventButton = createNewButton(`${mainClassName}-${currentPage}_form-${currentPage}_button`, 'Crear Evento');
    submitEventItem.appendChild(submitEventButton);
    eventFormList.appendChild(submitEventItem);

    return eventFormList;
};

export default createEventForm;