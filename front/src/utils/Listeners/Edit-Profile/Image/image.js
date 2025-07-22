import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createEditProfileImageSelectorListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createEditProfileImageSelectorListener';

    const callback = (event) => {
        event.preventDefault();

        try {
            const fileInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-img-field-input`, context);

            return fileInput.click();
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const uploadImageBtnListener = createListenerConstructor(`.${mainClassName}-${currentPage}-form-img-field-upload-btn`, context, callback, 'click');

    createNewListener(uploadImageBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default createEditProfileImageSelectorListener;