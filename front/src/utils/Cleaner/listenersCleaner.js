import removeClickListener from '../Listeners/Click/removeClickListener';

const activateListenersCleaner = (HTMLElements) => {
    for (const HTMLElement of HTMLElements) {
        removeClickListener(HTMLElement.querySelector, HTMLElement.callback);
    }
    HTMLElements.splice(0);
    return HTMLElements;
};

export default activateListenersCleaner;