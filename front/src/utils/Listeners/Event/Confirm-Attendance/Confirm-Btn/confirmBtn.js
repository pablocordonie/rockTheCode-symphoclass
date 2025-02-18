import createListenerConstructor from '../../../Listener/Constructor/listener';
import createNewListener from '../../../Listener/eventListener';
import errorHandler from '../../../../Error/errorHandler';
import testCards from '../../../../Data/testCards';

const createConfirmBtnListener = (confirmedIcon, eventItem, HTMLElementsWithListeners) => {
    const context = 'createConfirmBtnListener';

    const callback = event => {
        event.preventDefault();

        try {
            const eventId = parseInt(eventItem.dataset.id, 10);
            const eventData = testCards.find(card => card.id === eventId);
            if (!eventData) {
                throw new Error(`El evento con ID ${eventId} no ha sido encontrado`);
            };

            if (eventItem.classList.contains('confirmed')) {
                eventItem.classList.remove('confirmed');

                if (confirmedIcon && confirmedIcon.parentNode === eventItem) {
                    eventItem.removeChild(confirmedIcon);
                }

                eventData.confirmed = false;
            } else {
                eventItem.classList.add('confirmed');
                eventItem.appendChild(confirmedIcon);
                eventData.confirmed = true;
            };
        } catch (error) {
            return errorHandler(error, 'createConfirmBtnListener');
        }
    };

    const confirmBtnListener = createListenerConstructor('.confirm-btn', context, callback, 'click', eventItem);

    createNewListener(confirmBtnListener, HTMLElementsWithListeners, context);
};

export default createConfirmBtnListener;