import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createEventImageListener = (appConfig, HTMLElementsWithListeners) => {
    const { tscClassName } = appConfig;
    const context = 'createEventImageListener';

    const callback = (event) => {
        event.preventDefault();

        try {
            const fileInput = querySelectorChecker(`.${tscClassName}-event-form-img-field-input`, context);

            const imagePreview = querySelectorChecker(`.${tscClassName}-event-form-img-field-preview`, context);

            const handleFileChange = () => {
                const file = fileInput.files[0];

                if (file) {
                    if (file.type.startsWith('image/') && file.size < 2 * 1024 * 1024) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            imagePreview.src = reader.result;
                            imagePreview.style.display = 'flex';
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
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const uploadImageListener = createListenerConstructor(`.${tscClassName}-event-form-img-field-upload-btn`, context, callback, 'click');

    createNewListener(uploadImageListener, appConfig, HTMLElementsWithListeners, context);
};

export default createEventImageListener;