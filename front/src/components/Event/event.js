import createEventCreatorContent from '../Div/Event/event';
import createEventCreatorField from '../Item/Events/Event/event';
import createEventCreatorFieldInput from '../Input/Events/Event/event';
import createEventCreatorFieldLabel from '../Label/Event/event';
import createEventCreatorForm from '../Form/Event/event';
import createEventCreatorFormContent from '../List/Events/Event/event';
import { createFieldData } from '../../config/config';
import createImagePreview from '../Image/Preview/preview';
import createSubmitBtn from '../Button/Submit/submit';
import createSubmitContent from '../Div/Submit/submit';
import createUploadImageBtn from '../Button/Events/Event/event';
import createUploadImageFieldInput from '../Input/Events/Event/Upload-Image/uploadImage';

const createNewEventCreator = (appConfig) => {
    const { tscClassName } = appConfig;
    const eventFormFields = [];

    const eventCreatorContent = createEventCreatorContent(`${tscClassName}-event`);

    const eventCreatorForm = createEventCreatorForm(`${eventCreatorContent.className}-form`);
    eventCreatorContent.appendChild(eventCreatorForm);

    const eventCreatorFormContent = createEventCreatorFormContent(`${eventCreatorForm.className}-content`);
    eventCreatorForm.appendChild(eventCreatorFormContent);

    const eventTitleField = createFieldData(`${eventCreatorForm.className}-title`, 'title', 'title', 'Nombre del evento');
    eventFormFields.push(eventTitleField);

    const eventDateField = createFieldData(`${eventCreatorForm.className}-date`, 'date', 'date', 'Fecha');
    eventFormFields.push(eventDateField);

    const eventAddressField = createFieldData(`${eventCreatorForm.className}-address`, 'address', 'address', 'Dirección');
    eventFormFields.push(eventAddressField);

    const eventCenterField = createFieldData(`${eventCreatorForm.className}-center`, 'center', 'center', 'Centro de enseñanza');
    eventFormFields.push(eventCenterField);

    eventFormFields.forEach(field => {
        const eventCreatorField = createEventCreatorField(`${field.className}-field`);
        eventCreatorFormContent.appendChild(eventCreatorField);

        const eventCreatorFieldLabel = createEventCreatorFieldLabel(`${eventCreatorField.className}-label`, field.name, field.title);
        eventCreatorField.appendChild(eventCreatorFieldLabel);

        const eventCreatorFieldInput = createEventCreatorFieldInput(`${eventCreatorField.className}-input`, field.id, field.name, field.placeholderText);
        eventCreatorField.appendChild(eventCreatorFieldInput);
    });

    const eventImageField = createFieldData(`${eventCreatorForm.className}-img`, 'image', 'image', 'Imagen', 'file');

    const uploadImageField = createEventCreatorField(`${eventImageField.className}-field`);
    eventCreatorFormContent.appendChild(uploadImageField);

    const uploadImageFieldLabel = createEventCreatorFieldLabel(`${uploadImageField.className}-label`, eventImageField.name, eventImageField.title);
    uploadImageField.appendChild(uploadImageFieldLabel);

    const uploadImageBtn = createUploadImageBtn(`${uploadImageField.className}-upload-btn`, 'Subir archivo');
    uploadImageField.appendChild(uploadImageBtn);

    const uploadImageFieldInput = createUploadImageFieldInput(`${uploadImageField.className}-input`, eventImageField.id, eventImageField.name, eventImageField.placeholderText, eventImageField.inputType);
    uploadImageFieldInput.setAttribute('accept', 'image/*');
    uploadImageField.appendChild(uploadImageFieldInput);

    const uploadImagePreview = createImagePreview(`${uploadImageField.className}-preview`, '#', 'Preview image');
    uploadImageField.appendChild(uploadImagePreview);

    const eventSubmitContent = createSubmitContent(`${eventCreatorForm.className}-submit`);
    eventCreatorForm.appendChild(eventSubmitContent);

    const eventSubmitBtn = createSubmitBtn(`${eventSubmitContent.className}-btn`, 'Crear Evento');
    eventSubmitContent.appendChild(eventSubmitBtn);

    return eventCreatorContent;
};

export default createNewEventCreator;