import createMainTitle from '../../templates/Title/title';

const activateHeaderCleaner = (header) => {
    header.innerHTML = '';
    header.innerHTML += createMainTitle();
    return header;
};

export default activateHeaderCleaner;