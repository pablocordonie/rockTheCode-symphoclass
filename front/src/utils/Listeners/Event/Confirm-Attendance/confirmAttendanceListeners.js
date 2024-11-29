import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createConfirmAttendanceListeners = (HTMLElements) => {
    const confirmAttendanceButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, confirmAttendanceButton);

            try {
                /* Aplicar un estilo a elegir (subrayar los bordes de color verde o bien añadir un visto verde) al evento seleccionado */
            } catch (error) {
                errorHandler(error, 'createConfirmAttendanceButton');
            }
        },
        querySelector: querySelectorChecker('.confirm-btn', 'createConfirmAttendanceListeners', `El HTMLElement de className .confirm-btn no se ha encontrado`),
        type: 'click'
    };

    const { callback, querySelector, type } = confirmAttendanceButton;
    createNewListener(querySelector, callback, type);
};

export default createConfirmAttendanceListeners;