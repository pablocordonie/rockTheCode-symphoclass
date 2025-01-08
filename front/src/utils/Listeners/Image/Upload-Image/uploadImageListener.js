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

                const uploadImageField = querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field`, 'createUploadImageListener');

                const fileInput = uploadImageField.querySelector(`.${mainClassName}-${currentPage}_form-img_field-input`);
                if (!fileInput) {
                    throw new Error('No se ha encontrado el input oculto');
                }

                const previewImage = uploadImageField.querySelector(`.${mainClassName}-${currentPage}_form-img_field-preview_img`);

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
                return errorHandler(error, 'createUploadImageListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-img_field-button`, 'createUploadImageListener'),
        type: 'click'
    };

    const { callback, querySelector, type } = uploadImageButton;
    createNewListener(querySelector, callback, type);
};

export default createUploadImageListener;