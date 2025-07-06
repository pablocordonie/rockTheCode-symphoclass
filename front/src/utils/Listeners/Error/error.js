import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createCloseErrorListener = (appConfig, HTMLElementsWithListeners) => {
    const context = 'createCloseErrorListener';

    const callback = (event) => {
        event.preventDefault();

        const errorNotification = querySelectorChecker('.error-notification', context);
        errorNotification.remove();
    };

    const okBtnListener = createListenerConstructor('.error-btn', context, callback, 'click');

    createNewListener(okBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default createCloseErrorListener;