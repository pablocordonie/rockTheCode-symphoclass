const cloudinary = require('cloudinary').v2;

const deleteFile = async (url, next) => {
    if (!url) {
        const error = new Error("No image could be found to delete");
        error.statusCode = 404;
        return next(error);
    }

    // Extraer el publicId de la URL de Cloudinary
    const parts = url.split('/');
    const file = parts.pop();
    const folder = parts.pop();
    const publicId = folder + '/' + file.split('.')[0];

    try {
        const result = await cloudinary.uploader.destroy(publicId);
        if (result.result === 'ok') {
            console.log("The image's been deleted");
        } else {
            console.log("The image hasn't been found");
        }
        return result;
    } catch (err) {
        const error = new Error('An error occurred deleting the image');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { deleteFile };