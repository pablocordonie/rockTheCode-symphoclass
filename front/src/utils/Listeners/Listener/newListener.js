import addNewEventListener from './addEventListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';

const createNewListener = (eventListener, appConfig, HTMLElementsWithListeners, context) => {
    try {
        const { querySelector, callback, type } = eventListener;
        HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, context);

        addNewEventListener(querySelector, callback, type);
    } catch (error) {
        return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
    }
};

export default createNewListener;