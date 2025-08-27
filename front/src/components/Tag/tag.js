// Crea un nuevo elemento HTML con etiqueta, clase, atributos y texto especificados
const createNewTagTemplate = (
    tag, // Nombre de la etiqueta HTML (ej: 'div', 'span', 'a')
    className = '', // Clase CSS para el elemento
    attr = { // Objeto con atributos a asignar
        alt: '', dataId: '', for: '', href: '', id: '', method: '', name: '', placeholder: '', src: '', type: ''
    },
    text = '' // Texto para el elemento
) => {
    const newHTMLElement = document.createElement(tag); // Crea el elemento HTML

    if (className !== '') newHTMLElement.className = className; // Asigna la clase si existe

    if (text !== '') newHTMLElement.textContent = text; // Asigna el texto si existe

    // Asigna los atributos del objeto attr al elemento
    Object.entries(attr).forEach(([key, value]) => {
        if (value != null && value !== '') { // Solo si el valor no es nulo ni vacío
            key.startsWith('data') // Si el atributo empieza por 'data'
                ? newHTMLElement.setAttribute(`data-${key.slice(4).toLowerCase()}`, value) // Asigna como data-*
                : newHTMLElement.setAttribute(key, value); // Asigna el atributo normal
        }
    });

    return newHTMLElement; // Devuelve el elemento creado
};

export default createNewTagTemplate; // Exporta la función para su uso en otros módulos