import createListenerConstructor from '../../../Listener/Constructor/constructor';
import createNewListener from '../../../Listener/newListener';
import querySelectorChecker from '../../../../QuerySelector/querySelectorChecker';

const createEventCreatorCloseListener = (appConfig, HTMLElementsWithListeners) => {
    const { tscClassName } = appConfig;
    const context = 'createEventCreatorCloseListener';

    const callback = () => {
        const eventCreatorContent = querySelectorChecker(`.${tscClassName}-event`, context);
        eventCreatorContent.style.display = 'none';

        const imagePreview = querySelectorChecker(`.${tscClassName}-event-form-img-field-preview`, context);
        imagePreview.src = '#';
        imagePreview.style.display = 'none';
    };

    const eventCreatorCloseIcon = createListenerConstructor(`.${tscClassName}-event-close-icon-content`, context, callback, 'click');
    createNewListener(eventCreatorCloseIcon, appConfig, HTMLElementsWithListeners, context);
};

export default createEventCreatorCloseListener;