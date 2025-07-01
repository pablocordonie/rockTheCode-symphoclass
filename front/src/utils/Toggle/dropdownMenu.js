import createListenerConstructor from '../Listeners/Listener/Constructor/constructor';
import createNewListener from '../Listeners/Listener/newListener';
import errorHandler from '../Error/errorHandler';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const dropdownMenuToggle = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName } = appConfig;
    const context = 'dropdownMenuToggle';

    const callback = () => {
        try {
            const dropdownMenu = querySelectorChecker(`.${headerClassName}-${currentPage}-nav-user-menu`, context);

            dropdownMenu.style.display === 'flex' ? dropdownMenu.style.display = 'none' : dropdownMenu.style.display = 'flex';
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const dropdownMenuListener = createListenerConstructor(`.${headerClassName}-${currentPage}-nav-user-icon`, context, callback, 'click');

    createNewListener(dropdownMenuListener, appConfig, HTMLElementsWithListeners, context);
};

export default dropdownMenuToggle;