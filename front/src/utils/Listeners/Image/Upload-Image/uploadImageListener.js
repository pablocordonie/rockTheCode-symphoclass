import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createUploadImageListener = (appConfig, currentPage, HTMLElements) => {
    const { mainClassName } = appConfig;
    const uploadImageButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, uploadImageButton);

            try {
                /* Generar un acceso a los archivos del usuario para poder subir una imagen como avatar del perfil de usuario */
            } catch (error) {
                errorHandler(error, 'createUploadImageListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field`, 'createUploadImageListener', `El HTMLElement de className .${mainClassName}-${currentPage}_form-img_field no se ha encontrado`),
        type: 'click'
    };

    const { callback, querySelector, type } = uploadImageButton;
    createNewListener(querySelector, callback, type);
};

export default createUploadImageListener;