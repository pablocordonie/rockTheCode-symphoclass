const createTagTemplate = (tag, className, text = '', id = '', type = 'text') => {
    const newHTMLElement = document.createElement(`${tag}`);
    newHTMLElement.className = `${className}`;

    id !== '' ? newHTMLElement.id = `${id}` : '';
    text !== '' ? newHTMLElement.textContent = `${text}` : '';
    type !== '' ? newHTMLElement.type = `${type}` : '';

    return newHTMLElement;
};

export default createTagTemplate;