import createListenerConstructor from '../../../Listener/Constructor/constructor';
import createNewListener from '../../../Listener/newListener';
import errorHandler from '../../../../Error/errorHandler';

const createConfirmBtnListener = (checkIconContent, eventCard, appConfig, currentPage, eventsResponse, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createConfirmBtnListener';

    const callback = async (event) => {
        event.preventDefault();

        try {
            // TO-DO: Rehacer la asignación de evento
            const eventId = parseInt(eventCard.dataset.id, 10);
            console.log(eventId);

            const eventData = eventsResponse.data.find(card => card._id === eventId);
            console.log(eventsResponse.data[0]);
            console.log(eventData);

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
            return errorHandler(error, 'createConfirmBtnListener', appConfig, HTMLElementsWithListeners);
        }
    };

    const confirmBtnListener = createListenerConstructor(`.${mainClassName}-${currentPage}-card-confirm-btn`, context, callback, 'click', eventCard);

    createNewListener(confirmBtnListener, appConfig, HTMLElementsWithListeners, context);
};

export default createConfirmBtnListener;