import createNewButton from '../button';
import createNewTagTemplate from '../../Tag/tag';

const createNewSubmitButton = (className, currentPage, text) => {
    const submitButtonItem = createNewTagTemplate('li', `${className}-${currentPage}_submit`);

    const submitButton = createNewButton(`${className}-${currentPage}_button`, text);
    submitButtonItem.appendChild(submitButton);

    return submitButtonItem;
};

export default createNewSubmitButton;