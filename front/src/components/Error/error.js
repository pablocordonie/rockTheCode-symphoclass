import './error.css';
import createNewButton from '../Button/button';
import createNewParagraph from '../Paragraph/paragraph';

const createErrorNotification = (context, severity) => {
    const errorNotification = document.createElement('div');
    errorNotification.className = `error-notification${severity === 'critical' ? ' error-critical' : ''}`;
    errorNotification.style.display = 'flex';

    const errorMessage = createNewParagraph('error-message',
        severity === 'critical'
            ? `Error crítico en ${context}: Recarga la página o inténtalo más tarde`
            : `Error en ${context}: Ocurrió un problema al procesar la solicitud`
    );
    errorNotification.appendChild(errorMessage);

    const okBtn = createNewButton('error-btn', 'OK');
    errorNotification.appendChild(okBtn);

    return errorNotification;
};

export default createErrorNotification;