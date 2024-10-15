import createNewListener from '../Event-Listener/createNewListener';

const closeWarningListener = () => {
    const notification = document.querySelector('.sc-warning');

    // Cerrar la notificación al hacer clic en la "X"
    const closeX = document.querySelector('#close-X');

    createNewListener(closeX, () => {
        notification.style.display = 'none';
    }, 'click');

    // Cerrar la notificación al hacer clic en el botón "Cerrar"
    const closeButton = document.querySelector('#close-btn');

    createNewListener(closeButton, () => {
        notification.style.display = 'none';
    }, 'click');
};

export default closeWarningListener;