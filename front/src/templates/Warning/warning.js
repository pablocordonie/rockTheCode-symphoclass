import './warning.css';

const createWarningWindow = () => `
    <div class='sc-warning'>
        <div class='sc-warning-message'>
            <span class='sc-warning-message-close_X' id='close-X'>
                &times;
            </span>
            <p class='sc-warning-message-text'>
                Este es un mensaje de notificación
            </p>
        </div>
        <button class='sc-warning-close_btn' id='close-btn'>
            Cerrar
        </button>
    </div>
`;

export default createWarningWindow;