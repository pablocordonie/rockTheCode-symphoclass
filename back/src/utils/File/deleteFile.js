const cloudinary = require('cloudinary').v2;

const deleteFile = async (url) => {
    // Devolver un error 404 si la URL de la imagen no existe
    if (!url) {
        const error = new Error('No se ha podido encontrar la imagen');
        error.statusCode = 404;
        throw error;
    }

    // Dividir la URL en partes para extraer el publicId de la imagen en Cloudinary
    const parts = url.split('/');
    const file = parts.pop();
    const folder = parts.pop();
    const publicId = folder + '/' + file.split('.')[0];

    // Proceder a eliminar la imagen
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result === 'ok') {
        // Devolver por consola un mensaje de éxito acerca de la eliminación de la imagen
        console.log('The image has been deleted');
        return result;
    } else {
        // Devolver un error 500 en caso de fallo de conexión o de petición
        const error = new Error('Ha ocurrido un error al eliminar la imagen');
        error.statusCode = 500;
        throw error;
    }
};

module.exports = { deleteFile };