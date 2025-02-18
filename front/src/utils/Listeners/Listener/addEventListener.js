import removeListener from './removeEventListener';

const addNewEventListener = (HTMLElementWithListener, callback, type) => {
    removeListener(HTMLElementWithListener, callback, type);
    HTMLElementWithListener.addEventListener(type, callback);
};

export default addNewEventListener;