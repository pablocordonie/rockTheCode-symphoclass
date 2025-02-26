import createConfirmBtnListener from './Confirm-Btn/confirmBtn';
import createConfirmedIcon from '../../../../components/Icons/Confirmed/confirmed';

const createConfirmAttendanceListeners = (appConfig, eventItems, HTMLElementsWithListeners) => {
    const confirmedIcon = createConfirmedIcon('confirm-btn-confirmed_icon');

    eventItems.forEach(eventItem => {
        createConfirmBtnListener(appConfig, confirmedIcon.cloneNode(true), eventItem, HTMLElementsWithListeners);
    });
};

export default createConfirmAttendanceListeners;