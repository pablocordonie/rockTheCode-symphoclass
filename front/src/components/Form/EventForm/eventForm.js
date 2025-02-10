import './eventForm.css';
import createNewButton from '../../Button/button';
import createNewField from '../../Field/field';
import createUploadImageField from '../../Field/Upload-Image/uploadImage';
import generateFieldData from '../../../utils/Data/generateFieldData';
import generateList from '../../../utils/List/generateList';

const createEventForm = (appConfig, className, currentPage) => {
    const { mainClassName } = appConfig;
    const eventFormFields = [];

    const eventFormFieldsList = document.createElement('ul');
    eventFormFieldsList.className = `${className}`;

    const eventTitleField = generateFieldData(`${mainClassName}-${currentPage}_form-title_field`, 'title', 'Nombre del evento');
    eventFormFields.push(eventTitleField);

    const eventDateField = generateFieldData(`${mainClassName}-${currentPage}_form-date_field`, 'date', 'Fecha');
    eventFormFields.push(eventDateField);

    const eventAddressField = generateFieldData(`${mainClassName}-${currentPage}_form-address_field`, 'address', 'Dirección');
    eventFormFields.push(eventAddressField);

    const eventCenterField = generateFieldData(`${mainClassName}-${currentPage}_form-center_field`, 'center', 'Centro de enseñanza');
    eventFormFields.push(eventCenterField);

    console.log(eventFormFields);
    generateList(eventFormFieldsList, eventFormFields, field => createNewField(field));

    const eventImageField = generateFieldData(`${mainClassName}-${currentPage}_form-img_field`, 'image', 'Imagen', 'file');
    const eventUploadImageField = createUploadImageField(eventImageField);
    eventFormFieldsList.appendChild(eventUploadImageField);

    /* Util => generateOptionsToClick.js */
    const submitEventItem = document.createElement('li');
    submitEventItem.className = `${mainClassName}-${currentPage}_form-${currentPage}_item`;
    const submitEventButton = createNewButton(`${mainClassName}-${currentPage}_form-${currentPage}_button`, 'Crear Evento');
    submitEventItem.appendChild(submitEventButton);
    eventFormFieldsList.appendChild(submitEventItem);

    return eventFormFieldsList;
};

export default createEventForm;