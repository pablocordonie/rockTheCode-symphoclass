import createNewListener from '../Listeners/Listener/createNewListener';
import duplicatesRemoverIntoArray from '../Filter/duplicatesRemover';
import querySelectorChecker from '../QuerySelector/querySelectorChecker';

const dropdownMenuToggle = (className, appConfig, HTMLElements) => {
    const userOptions = {
        callback: () => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, userOptions);

            const dropdownMenu = document.querySelector(`.${className}-dropdown_menu`);
            if (!dropdownMenu) {
                throw new Error(`El elemento de className .${className}-dropdown_menu no se ha encontrado`);
            } else {
                dropdownMenu.style.display === 'flex' ? dropdownMenu.style.display = 'none' : dropdownMenu.style.display = 'flex';
            }
        },
        querySelector: querySelectorChecker(`.${className}-user_options`, appConfig, 'dropdownMenuToggle', `El elemento de className .${className}-user_options no se ha encontrado`, HTMLElements),
        type: 'click'
    };
    const { callback, querySelector, type } = userOptions;
    // Listener para mostrar o esconder el menú desplegable
    createNewListener(querySelector, callback, type);
};

export default dropdownMenuToggle;