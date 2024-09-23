import { createClickListener } from '../Click/clickListeners';

const closeWarningListener = () => {
    const notification = document.querySelector('.sc-warning');

    // Cerrar la notificación al hacer clic en la "X"
    const closeX = document.querySelector('#close-X');

    createClickListener(closeX, () => {
        notification.style.display = 'none';
    });

    // Cerrar la notificación al hacer clic en el botón "Cerrar"
    const closeButton = document.querySelector('#close-btn');

    createClickListener(closeButton, () => {
        notification.style.display = 'none';
    });
};

export default closeWarningListener;