const createNewTagTemplate = (tag, className, attr = { alt: '', dataId: '', for: '', id: '', method: '', placeholder: '', src: '', type: 'text' }, text = '') => {
    const newHTMLElement = document.createElement(tag);
    newHTMLElement.className = className;
    if (text !== '') newHTMLElement.textContent = text;

    Object.entries(attr).forEach(([key, value]) => {
        if (value !== '') {
            key.startsWith('data')
                ? newHTMLElement.setAttribute(`data-${key.slice(4).toLowerCase()}`, value)
                : newHTMLElement.setAttribute(key, value);
        }
    });

    return newHTMLElement;
};

export default createNewTagTemplate;