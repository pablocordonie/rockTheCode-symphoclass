import createNewTagTemplate from '../Tag/tag'; // Importa la función para crear elementos HTML genéricos

// Crea un nuevo botón con clase, texto y opcionalmente un id
const createNewButton = (
    className, // Clase CSS para el botón
    text,      // Texto que se mostrará en el botón
    id = ''    // ID opcional para el botón
) => createNewTagTemplate('button', className, { id, type: 'button' }, text); // Usa la función genérica para crear el botón

export default createNewButton; // Exporta la función para su uso en otros módulos