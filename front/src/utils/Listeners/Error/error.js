import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';

const createCloseErrorListener = (errorNotification, appConfig, HTMLElementsWithListeners) => {
    const context = 'createCloseErrorListener';

    const callback = () => errorNotification.remove();

    const okBtnListener = createListenerConstructor('.error-btn', context, callback, 'click', errorNotification);

    createNewListener(okBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default createCloseErrorListener;