const generateList = (listContainer, listItems, createListItemFn) => {
    if (!listContainer) return;

    // Limpia el contenedor antes de renderizar
    listContainer.innerHTML = '';

    // Itera sobre los datos y añade cada elemento al contenedor
    listItems.forEach(listItem => {
        const newElement = createListItemFn(listItem);
        if (newElement) listContainer.appendChild(newElement);
    });
    return listContainer;
};

export default generateList;