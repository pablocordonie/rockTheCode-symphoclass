import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createUploadImageListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { mainClassName } = appConfig;
    const context = 'createUploadImageListener';

    const callback = event => {
        event.preventDefault();

        try {
            const uploadImageField = querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field`, context);

            const fileInput = querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field-input`, context, uploadImageField);
            if (!fileInput) {
                throw new Error('No se ha encontrado el input oculto');
            }

            const previewImage = querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field-preview_img`, context, uploadImageField);

            fileInput.click();

            const handleFileChange = () => {
                const file = fileInput.files[0];
                if (file) {
                    if (file.type.startsWith('image/') && file.size < 2 * 1024 * 1024) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            previewImage.src = reader.result;
                            previewImage.style.display = 'flex';
                        };
                        reader.readAsDataURL(file);
                    } else {
                        throw new Error('Por favor, seleccione un archivo de imagen inferior a 2 MB');
                    }
                }
                fileInput.value = '';
            };

            fileInput.removeEventListener('change', handleFileChange);
            fileInput.addEventListener('change', handleFileChange);
        } catch (error) {
            return errorHandler(error, 'createUploadImageListener', appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const uploadImageListener = createListenerConstructor(`.${mainClassName}-${currentPage}_form-img_field-button`, context, callback, 'click');

    createNewListener(uploadImageListener, appConfig, HTMLElementsWithListeners, context);
};

export default createUploadImageListener;