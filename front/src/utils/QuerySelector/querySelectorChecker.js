const querySelectorChecker = (className, context, scope = document) => {
    const HTMLElement = scope.querySelector(className);

    if (!HTMLElement) {
        throw new Error(`Error en ${context}: El selector ${className} no encontró ningún elemento`);
    }

    return HTMLElement;
};

export default querySelectorChecker;