import createErrorNotificationCloseBtn from '../Button/Error/error';
import createErrorNotificationContent from '../Div/Error/error';
import createErrorNotificationMessage from '../Paragraph/Error/error';
import createErrorNotificationTitle from '../Title/H3/Error/error';

const createErrorNotification = (error, severity) => {
    const errorNotification = createErrorNotificationContent(`error-notification${severity === 'critical' ? ' error-critical' : ''}`);
    errorNotification.style.display = 'flex';

    const errorTitle = createErrorNotificationTitle('error-title', `${severity === 'critical' ? 'Error Crítico' : 'Error'}`);
    errorNotification.appendChild(errorTitle);

    const errorMessage = createErrorNotificationMessage('error-message',
        severity === 'critical'
            ? 'Recarga la página o inténtalo más tarde'
            : error.message
    );
    errorNotification.appendChild(errorMessage);

    const errorCloseBtn = createErrorNotificationCloseBtn('error-btn', 'OK');
    errorNotification.appendChild(errorCloseBtn);

    return errorNotification;
};

export default createErrorNotification;