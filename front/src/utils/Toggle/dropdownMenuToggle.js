import createNewListener from '../Listeners/Listener/createNewListener';
import duplicatesRemoverIntoArray from '../Filter/duplicatesRemover';
import errorHandler from '../Error/errorHandler';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const dropdownMenuToggle = (className, HTMLElementsWithListeners) => {
    const userOptions = {
        callback: () => {
            try {
                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, userOptions);

                const dropdownMenu = document.querySelector(`.${className}-dropdown_menu`);
                if (!dropdownMenu) {
                    throw new Error(`El elemento de className .${className}-dropdown_menu no se ha encontrado`);
                } else {
                    dropdownMenu.style.display === 'flex' ? dropdownMenu.style.display = 'none' : dropdownMenu.style.display = 'flex';
                }
            } catch (error) {
                return errorHandler(error, 'dropdownMenuToggle');
            }
        },
        querySelector: querySelectorChecker(`.${className}-user_options`, 'dropdownMenuToggle'),
        type: 'click'
    };
    const { callback, querySelector, type } = userOptions;
    // Listener para mostrar o esconder el menú desplegable
    createNewListener(querySelector, callback, type);
};

export default dropdownMenuToggle;