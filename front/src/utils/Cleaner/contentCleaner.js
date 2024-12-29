const activateContentCleaner = (content) => {
    if (!content) {
        throw new Error('No se encontró ningún HTMLElement que limpiar');
    }
    content.innerHTML = '';
};

export default activateContentCleaner;