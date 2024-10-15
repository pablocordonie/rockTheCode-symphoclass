import removeListener from '../Listeners/Event-Listener/removeListener';

const activateListenersCleaner = (HTMLElements) => {
    for (const HTMLElement of HTMLElements) {
        removeListener(HTMLElement.querySelector, HTMLElement.callback);
    }
    HTMLElements.splice(0);
    return HTMLElements;
};

export default activateListenersCleaner;