const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const eventsStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Events',
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

const uploadEvent = multer({ storage: eventsStorage });
const uploadAvatar = multer({ storage: userAvatarsStorage });

module.exports = { uploadAvatar, uploadEvent };