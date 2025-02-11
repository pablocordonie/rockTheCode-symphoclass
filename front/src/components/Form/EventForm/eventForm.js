import './eventForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import createUploadImageField from '../../Field/Upload-Image/uploadImage';
import createNewFieldData from '../../Field/Data/fieldData';
import createNewList from '../../List/list';
import createNewSubmitButton from '../../Button/Submit/submitButton';

const createEventForm = (appConfig, className, currentPage) => {
    const { mainClassName } = appConfig;
    const eventFormFields = [];

    const eventFormFieldsList = document.createElement('ul');
    eventFormFieldsList.className = `${className}`;

    const eventTitleField = createNewFieldData(`${mainClassName}-${currentPage}_form-title_field`, 'title', 'Nombre del evento');
    eventFormFields.push(eventTitleField);

    const eventDateField = createNewFieldData(`${mainClassName}-${currentPage}_form-date_field`, 'date', 'Fecha');
    eventFormFields.push(eventDateField);

    const eventAddressField = createNewFieldData(`${mainClassName}-${currentPage}_form-address_field`, 'address', 'Dirección');
    eventFormFields.push(eventAddressField);

    const eventCenterField = createNewFieldData(`${mainClassName}-${currentPage}_form-center_field`, 'center', 'Centro de enseñanza');
    eventFormFields.push(eventCenterField);

    createNewList(eventFormFieldsList, eventFormFields, field => createNewField(field));

    const eventImageField = createNewFieldData(`${mainClassName}-${currentPage}_form-img_field`, 'image', 'Imagen', 'file');
    const eventUploadImageField = createUploadImageField(eventImageField);
    eventFormFieldsList.appendChild(eventUploadImageField);

    const submitEventItem = createNewSubmitButton(`${mainClassName}-${currentPage}_form`, currentPage, 'Crear Evento');
    eventFormFieldsList.appendChild(submitEventItem);

    return eventFormFieldsList;
};

export default createEventForm;