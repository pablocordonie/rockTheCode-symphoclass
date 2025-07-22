import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createEventImageSelectorListener = (appConfig, HTMLElementsWithListeners) => {
    const { tscClassName } = appConfig;
    const context = 'createEventImageSelectorListener';

    const callback = (event) => {
        event.preventDefault();

        try {
            const fileInput = querySelectorChecker(`.${tscClassName}-event-form-img-field-input`, context);

            return fileInput.click();
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const uploadImageBtnListener = createListenerConstructor(`.${tscClassName}-event-form-img-field-upload-btn`, context, callback, 'click');

    createNewListener(uploadImageBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default createEventImageSelectorListener;