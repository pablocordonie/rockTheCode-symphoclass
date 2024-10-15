const removeListener = (HTMLElement, callback, type) => HTMLElement.removeEventListener(type, callback);

export default removeListener;