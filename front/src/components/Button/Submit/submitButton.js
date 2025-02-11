import createNewButton from '../button';

const createNewSubmitButton = (className, currentPage, text) => {
    const submitButtonItem = document.createElement('li');
    submitButtonItem.className = `${className}-${currentPage}_submit`;

    const submitButton = createNewButton(`${className}-${currentPage}_button`, `${text}`);
    submitButtonItem.appendChild(submitButton);

    return submitButtonItem;
};

export default createNewSubmitButton;