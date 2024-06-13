const cloudinary = require('cloudinary').v2;

const deleteFile = async (url) => {
    if (!url) {
        const error = new Error("no image could be found to delete");
        error.statusCode = 404;
        return next(error);
    }

    const publicId = url.split('/').pop().split('.')[0];

    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (err) {
        const error = new Error('an error occurred deleting the image');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { deleteFile };