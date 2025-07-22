import createCloseErrorListener from '../Listeners/Error/error';
import createErrorNotification from '../../components/Error/error';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const errorHandler = (error, context, appConfig, HTMLElementsWithListeners, severity = 'warning', returnValue = null) => {
    const { appId } = appConfig;
    const errorHandlerContext = 'errorHandler';

    console.error(context, error);

    const appContent = querySelectorChecker(`#${appId}`, errorHandlerContext);
    const errorNotification = document.querySelector('.error-notification');
    if (error && !errorNotification) {
        const newErrorNotification = createErrorNotification(error, severity);
        appContent.insertAdjacentHTML('afterbegin', newErrorNotification.outerHTML);
        createCloseErrorListener(appConfig, HTMLElementsWithListeners);
    }

    return returnValue;
};

export default errorHandler;