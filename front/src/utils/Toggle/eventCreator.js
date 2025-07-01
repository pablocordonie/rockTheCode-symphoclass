import createListenerConstructor from '../Listeners/Listener/Constructor/constructor';
import createNewListener from '../Listeners/Listener/newListener';
import errorHandler from '../Error/errorHandler';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const eventCreatorListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, tscClassName } = appConfig;
    const context = 'eventCreatorListener';

    const callback = event => {
        try {
            event.preventDefault();

            const eventCreatorContent = querySelectorChecker(`.${tscClassName}-event`, context);
            eventCreatorContent.style.display = 'flex';
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const eventCreatorNavBtnListener = createListenerConstructor(`.${headerClassName}-${currentPage}-nav-create-btn`, context, callback, 'click');

    createNewListener(eventCreatorNavBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default eventCreatorListener;