import createListenerConstructor from '../../../Listener/Constructor/constructor';
import createNewListener from '../../../Listener/newListener';
import errorHandler from '../../../../Error/errorHandler';
import testCards from '../../../../Data/testCards';

const createConfirmBtnListener = (checkIconContent, eventCard, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createConfirmBtnListener';

    const callback = event => {
        event.preventDefault();

        try {
            const eventId = parseInt(eventCard.dataset.id, 10);
            const eventData = testCards.find(card => card.id === eventId);
            if (!eventData) {
                throw new Error(`El evento con ID ${eventId} no ha sido encontrado`);
            };

            if (eventCard.classList.contains('confirmed')) {
                eventCard.classList.remove('confirmed');

                if (checkIconContent && checkIconContent.parentNode === eventCard) {
                    eventCard.removeChild(checkIconContent);
                }

                eventData.confirmed = false;
            } else {
                eventCard.classList.add('confirmed');
                eventCard.appendChild(checkIconContent);
                eventData.confirmed = true;
            };
        } catch (error) {
            return errorHandler(error, 'createConfirmBtnListener', appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const confirmBtnListener = createListenerConstructor(`.${mainClassName}-${currentPage}-card-confirm-btn`, context, callback, 'click', eventCard);

    createNewListener(confirmBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default createConfirmBtnListener;