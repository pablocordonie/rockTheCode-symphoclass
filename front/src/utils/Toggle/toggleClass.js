const toggleClass = (element, ...classes) => {
    if (!element) return;
    classes.forEach(cls => element.classList.toggle(cls));
};

export default toggleClass;