import createConfirmBtnListener from './Confirm-Btn/confirmBtn';
import createConfirmedIcon from '../../../../components/Icons/Confirmed/confirmed';

const createConfirmAttendanceListeners = (eventItems, HTMLElementsWithListeners) => {
    const confirmedIcon = createConfirmedIcon('confirm-btn-confirmed_icon');

    eventItems.forEach(eventItem => {
        createConfirmBtnListener(confirmedIcon.cloneNode(true), eventItem, HTMLElementsWithListeners);
    });
};

export default createConfirmAttendanceListeners;