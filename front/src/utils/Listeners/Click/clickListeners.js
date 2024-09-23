import printLoader from '../../Loader/printLoader';

export const createClickListener = (HTMLElement, callback) => {
    // Desactivar temporalmente el listener antes de ejecutar printLoader
    HTMLElement.removeEventListener('click', callback);

    // Volver a añadir el listener después de ejecutar printLoader
    HTMLElement.addEventListener('click', callback);
};

export const createClickListenerWithLoader = (HTMLElement, callback, appId, footerClassName, loaderClassName, webContentClassName) => {
    // Desactivar temporalmente el listener antes de ejecutar printLoader
    HTMLElement.removeEventListener('click', callback);

    // Ejecutar printLoader sin interferencia del listener
    printLoader(appId, footerClassName, loaderClassName, webContentClassName);

    // Volver a añadir el listener después de ejecutar printLoader
    HTMLElement.addEventListener('click', callback);
};