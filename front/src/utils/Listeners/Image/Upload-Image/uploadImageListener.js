import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createUploadImageListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const uploadImageButton = {
        callback: (event) => {
            event.preventDefault();

            try {
                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, uploadImageButton);
                /* Generar un acceso a los archivos del usuario para poder subir una imagen como avatar del perfil de usuario */
            } catch (error) {
                return errorHandler(error, 'createUploadImageListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field`, 'createUploadImageListener'),
        type: 'click'
    };

    const { callback, querySelector, type } = uploadImageButton;
    createNewListener(querySelector, callback, type);
};

export default createUploadImageListener;