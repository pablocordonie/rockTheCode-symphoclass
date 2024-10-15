const createNewListener = (HTMLElement, callback, type) => HTMLElement.addEventListener(type, callback);

export default createNewListener;