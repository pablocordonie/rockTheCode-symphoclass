const cloudinary = require('cloudinary').v2;

const deleteFile = async (url) => {
    if (!url) {
        const error = new Error(`No image could be found to delete`);
        error.statusCode = 404;
        return error;
    }

    const parts = url.split('/');
    const file = parts.pop();
    const folder = parts.pop();
    const publicId = folder + '/' + file.split('.')[0];

    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result === 'ok') {
        console.log(`The image's been deleted`);
        return result;
    } else {
        const error = new Error('An error occurred deleting the image');
        error.statusCode = 500;
        return error;
    }
};

module.exports = { deleteFile };