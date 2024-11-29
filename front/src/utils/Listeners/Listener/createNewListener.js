import removeListener from './removeListener';

const createNewListener = (HTMLElement, callback, type) => {
    removeListener(HTMLElement, callback, type);
    HTMLElement.addEventListener(type, callback);
};

export default createNewListener;