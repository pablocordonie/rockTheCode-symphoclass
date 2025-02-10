const generateFieldData = (className, name, title, inputType = 'text', inputId = '', placeholderText = '') => {

    const newFieldData = {
        className,
        inputId,
        inputType,
        name,
        placeholderText,
        title
    };
    return newFieldData;
};

export default generateFieldData;