import './eventForm.css';
import { createFieldData } from '../../../config/config';
import createUploadImageField from '../../Upload-Image/uploadImage';
import createSubmitBtn from '../../Button/Submit/submit';
import createNewTagTemplate from '../../Tag/tag';

const createEventForm = (appConfig, className, currentPage) => {
    const { mainClassName } = appConfig;
    const eventFormFields = [];

    const eventFormFieldsList = createNewTagTemplate('ul', className);

    const eventTitleField = createFieldData(`${mainClassName}-${currentPage}_form-title_field`, 'title', 'Nombre del evento');
    eventFormFields.push(eventTitleField);

    const eventDateField = createFieldData(`${mainClassName}-${currentPage}_form-date_field`, 'date', 'Fecha');
    eventFormFields.push(eventDateField);

    const eventAddressField = createFieldData(`${mainClassName}-${currentPage}_form-address_field`, 'address', 'Dirección');
    eventFormFields.push(eventAddressField);

    const eventCenterField = createFieldData(`${mainClassName}-${currentPage}_form-center_field`, 'center', 'Centro de enseñanza');
    eventFormFields.push(eventCenterField);

    // TO-DO: Crear una lista de campos para el formulario de evento

    const eventImageField = createFieldData(`${mainClassName}-${currentPage}_form-img_field`, 'image', 'Imagen', 'file');
    const eventUploadImageField = createUploadImageField(eventImageField);
    eventFormFieldsList.appendChild(eventUploadImageField);

    const submitEventItem = createSubmitBtn(`${mainClassName}-${currentPage}_form`, currentPage, 'Crear Evento');
    eventFormFieldsList.appendChild(submitEventItem);

    return eventFormFieldsList;
};

export default createEventForm;