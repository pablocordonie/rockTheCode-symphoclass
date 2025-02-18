const removeListener = (HTMLElementWithListener, callback, type) => HTMLElementWithListener.removeEventListener(type, callback);

export default removeListener;