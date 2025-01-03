import createNewListener from '../../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../../Filter/duplicatesRemover';
import errorHandler from '../../../../Error/errorHandler';
import querySelectorChecker from '../../../../QuerySelector/querySelectorChecker';
import testCards from '../../../../../../testCards';

const createConfirmBtnListener = (confirmedIcon, eventItem, HTMLElementsWithListeners) => {
    const confirmAttendanceBtn = {
        callback: (event) => {
            event.preventDefault();

            try {
                const eventId = parseInt(eventItem.dataset.id, 10);
                const eventData = testCards.find(card => card.id === eventId);
                if (!eventData) {
                    throw new Error(`El evento con ID ${eventId} no ha sido encontrado`);
                };

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, confirmAttendanceBtn);

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
        },
        querySelector: querySelectorChecker('.confirm-btn', 'createConfirmBtnListener', eventItem),
        type: 'click'
    };

    const { callback, querySelector, type } = confirmAttendanceBtn;
    createNewListener(querySelector, callback, type);
};

export default createConfirmBtnListener;