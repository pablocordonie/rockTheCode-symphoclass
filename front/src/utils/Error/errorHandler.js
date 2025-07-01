import createCloseErrorListener from '../Listeners/Error/error';
import createErrorNotification from '../../components/Error/error';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const errorHandler = (error, context, appConfig, HTMLElementsWithListeners, severity = 'warning', returnValue = null) => {
    const { mainClassName } = appConfig;
    const errorHandlerContext = 'errorHandler';

    console.error(context, error);

    const main = querySelectorChecker(`.${mainClassName}`, errorHandlerContext);
    const errorNotification = document.querySelector('.error-notification');
    if (error && !errorNotification) {
        const newErrorNotification = createErrorNotification(severity);
        main.appendChild(newErrorNotification);
        createCloseErrorListener(newErrorNotification, appConfig, HTMLElementsWithListeners);
    }

    return returnValue;
};

export default errorHandler;