import './form.css';
import createNewTagTemplate from '../Tag/tag';

const createNewForm = (className, content) => {
    const newForm = createNewTagTemplate('form', className, { method: 'post' });
    newForm.appendChild(content);

    return newForm;
};

export default createNewForm;