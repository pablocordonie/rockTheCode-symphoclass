import './field.css';
import createNewInput from '../Input/input';
import createNewTagTemplate from '../Tag/tag';

const createNewField = (field) => {
    const { className, inputType, name, placeholderText, title } = field;

    const newField = createNewTagTemplate('li', className);

    const label = createNewTagTemplate('label', `${className}-label`, { for: name }, title);
    newField.appendChild(label);

    const input = createNewInput(`${className}-input`, name, placeholderText, inputType);
    newField.appendChild(input);

    return newField;
};

export default createNewField;