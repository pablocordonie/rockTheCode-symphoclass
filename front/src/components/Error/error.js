import './error.css';
import createNewButton from '../Button/button';
import createNewH3Title from '../Title/H3/h3';
import createNewParagraph from '../Paragraph/paragraph';

const createErrorNotification = (severity) => {
    const errorNotification = document.createElement('div');
    errorNotification.className = `error-notification${severity === 'critical' ? ' error-critical' : ''}`;
    errorNotification.style.display = 'flex';

    const errorTitle = createNewH3Title('error-title', `${severity === 'critical' ? 'Error Crítico' : 'Error'}`);
    errorNotification.appendChild(errorTitle);

    const errorMessage = createNewParagraph('error-message',
        severity === 'critical'
            ? 'Recarga la página o inténtalo más tarde'
            : 'Ocurrió un problema al procesar la solicitud'
    );
    errorNotification.appendChild(errorMessage);

    const okBtn = createNewButton('error-btn', 'OK');
    errorNotification.appendChild(okBtn);

    return errorNotification;
};

export default createErrorNotification;