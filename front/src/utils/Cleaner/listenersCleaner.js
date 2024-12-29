import removeListener from '../Listeners/Listener/removeListener';

const activateListenersCleaner = (HTMLElementsWithListeners) => {
    HTMLElementsWithListeners.filter(HTMLElement => HTMLElement).forEach(HTMLElement => removeListener(HTMLElement.querySelector, HTMLElement.callback));
    HTMLElementsWithListeners.splice(0);
    return HTMLElementsWithListeners;
};

export default activateListenersCleaner;