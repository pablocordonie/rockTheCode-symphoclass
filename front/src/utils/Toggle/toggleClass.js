const toggleClass = (element, className, currentPage) => currentPage === 'events' ? element.className = className : element.classList.remove(className);

export default toggleClass;