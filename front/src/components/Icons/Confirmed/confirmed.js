import './confirmed.css';
import createNewTagTemplate from '../../Tag/tag';

const createConfirmedIcon = (className) => createNewTagTemplate('div', className, {}, '✔');

export default createConfirmedIcon;