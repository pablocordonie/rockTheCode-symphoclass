const printWarning = (type, message) => {
    const notification = document.querySelector('.sc-warning');
    const messageText = document.querySelector('.sc-warning-message-text');

    // Actualiza el mensaje
    messageText = message;

    // Agrega la clase según el tipo de notificación
    notification.classList.remove('error', 'warning');
    notification.classList.add(type);

    // Muestra la notificación
    notification.style.display = 'block';
};

export default printWarning;