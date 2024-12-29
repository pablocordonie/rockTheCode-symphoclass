import './confirmed.css';

const createConfirmedIcon = (className) => {
    const confirmedIcon = document.createElement('div');
    confirmedIcon.className = `${className}`;
    confirmedIcon.innerHTML = '&#10004;';
    return confirmedIcon;
};

export default createConfirmedIcon;