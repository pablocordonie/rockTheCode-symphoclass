import createListenerConstructor from '../Listeners/Listener/Constructor/listener';
import createNewListener from '../Listeners/Listener/newListener';
import errorHandler from '../Error/errorHandler';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const dropdownMenuToggle = (className, appConfig, HTMLElementsWithListeners) => {
    const context = 'dropdownMenuToggle';

    const callback = () => {
        try {
            const dropdownMenu = querySelectorChecker(`.${className}-dropdown_menu`, 'dropdownMenuToggle');
            if (!dropdownMenu) {
                throw new Error(`El elemento de className .${className}-dropdown_menu no se ha encontrado`);
            } else {
                dropdownMenu.style.display === 'flex' ? dropdownMenu.style.display = 'none' : dropdownMenu.style.display = 'flex';
            }
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const dropdownMenuListener = createListenerConstructor(`.${className}-user_options`, context, callback, 'click');

    createNewListener(dropdownMenuListener, appConfig, HTMLElementsWithListeners, context);
};

export default dropdownMenuToggle;