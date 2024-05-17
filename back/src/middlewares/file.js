const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const concertsStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Concerts',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    }
});

const userAvatarsStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Avatars',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    }
});

const uploadConcert = multer({ storage: concertsStorage });
const uploadAvatar = multer({ storage: userAvatarsStorage });

module.exports = { uploadAvatar, uploadConcert };