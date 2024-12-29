const createTagTemplate = (tag, className, text, id = '') => {
    const newHTMLElement = document.createElement(`${tag}`);

    id !== '' ? newHTMLElement.id = `${id}` : '';

    newHTMLElement.className = `${className}`;
    newHTMLElement.textContent = `${text}`;
    return newHTMLElement;
};

export default createTagTemplate;