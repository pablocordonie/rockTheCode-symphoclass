import createCheckIcon from '../../../../components/Icon/Events/Check/check';
import createCheckIconContent from '../../../../components/Div/Events/Check/check';
import createConfirmBtnListener from './Confirm-Btn/confirmBtn';

const createConfirmAttendanceListeners = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;

    const eventCards = Array.from(document.querySelectorAll(`.${mainClassName}-${currentPage}-card`));

    const checkIconContent = createCheckIconContent(`${mainClassName}-${currentPage}-card-check`);

    const checkIcon = createCheckIcon(`${mainClassName}-${currentPage}-card-check-icon`);
    checkIconContent.appendChild(checkIcon);

    eventCards.forEach(eventCard => {
        eventCard.appendChild(checkIconContent);
        createConfirmBtnListener(checkIconContent.cloneNode(true), eventCard, appConfig, currentPage, HTMLElementsWithListeners);
    });
};

export default createConfirmAttendanceListeners;