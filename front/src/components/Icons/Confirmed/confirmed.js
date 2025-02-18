import './confirmed.css';
import createNewTagTemplate from '../../Tag/tag';

const createConfirmedIcon = (className) => {
    const confirmedIcon = createNewTagTemplate('div', className, {}, '✔');
    return confirmedIcon;
};

export default createConfirmedIcon;