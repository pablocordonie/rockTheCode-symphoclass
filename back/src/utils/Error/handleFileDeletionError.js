const { deleteFile } = require('../File/deleteFile');

const handleFileDeletionError = async (filePath) => {
    const result = await deleteFile(filePath);
    return result;
};

module.exports = { handleFileDeletionError };