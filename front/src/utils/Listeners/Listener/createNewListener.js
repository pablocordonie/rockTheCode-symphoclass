import removeListener from './removeListener';

const createNewListener = (HTMLElementWithListener, callback, type) => {
    removeListener(HTMLElementWithListener, callback, type);
    HTMLElementWithListener.addEventListener(type, callback);
};

export default createNewListener;